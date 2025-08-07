import { NextResponse } from 'next/server'
import { ContactForm } from '@/types'

export async function POST(request: Request) {
  try {
    const body: ContactForm = await request.json()
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user
    
    console.log('Contact form submission:', body)
    
    // Mock successful response
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message. I\'ll get back to you soon!'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
