'use server';
/**
 * @fileOverview Generates an image for a given career role.
 *
 * - generateRoleImage - A function that creates an image for a tech role.
 * - RoleImageInput - The input type for the generateRoleImage function.
 * - RoleImageOutput - The return type for the generateRoleImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RoleImageInputSchema = z.object({
  roleName: z.string().describe('The name of the career role.'),
});
export type RoleImageInput = z.infer<typeof RoleImageInputSchema>;

const RoleImageOutputSchema = z.object({
  imageUrl: z
    .string()
    .describe(
      "A generated image for the role, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type RoleImageOutput = z.infer<typeof RoleImageOutputSchema>;

export async function generateRoleImage(
  input: RoleImageInput
): Promise<RoleImageOutput> {
  return generateRoleImageFlow(input);
}

const generateRoleImageFlow = ai.defineFlow(
  {
    name: 'generateRoleImageFlow',
    inputSchema: RoleImageInputSchema,
    outputSchema: RoleImageOutputSchema,
  },
  async ({roleName}) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate an engaging, artistic, abstract concept image representing the profession of a ${roleName}. The style should be modern, slightly futuristic, and professional. Avoid showing people's faces. Focus on symbolic elements related to the job.`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Image generation failed.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
