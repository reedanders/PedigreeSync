"use server";

import { createClient } from '@/lib/utils/supabase/server';
import { OpenAI } from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function processFileWithAI(formData: FormData) {
  try {
    // 1. Get the file from the form data
    const file = formData.get('file') as File;
    if (!file) {
      throw new Error('No file provided');
    }
    
    // 2. Read the file content
    const fileContent = await file.text();
    
    // 3. Send to OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Extract structured data from this file for sheep pedigree tracking. Format the response as JSON.'
        },
        {
          role: 'user',
          content: fileContent
        }
      ]
    });
    
    // 4. Parse the response
    const structuredData = JSON.parse(response.choices[0].message.content);
    
    // 5. Store in database
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('animals')
      .insert(structuredData.animals);
      
    if (error) throw error;
    
    return { success: true, count: structuredData.animals.length };
    
  } catch (error: any) {
    console.error('File processing error:', error);
    return { success: false, error: error.message };
  }
}