'use client'

import { Scale } from 'lucide-react'

export function DocumentSummary() {
  // This is mock data - replace with actual summary data
  const mockSummary = {
    title: "Employment Contract",
    summary: "This document outlines the terms of employment between Acme Corp and John Smith. Key points include:\n\n- Full-time position as Senior Developer\n- Annual salary of $120,000\n- 4 weeks paid vacation\n- Standard non-compete clause\n- 6-month probationary period",
    date: "2024-01-03",
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#FFE990]">Document Summary</h2>
      {mockSummary ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#CD7F32]">
            <Scale className="w-5 h-5 text-[#CD7F32]" />
            <h3 className="font-medium text-[#FFE990]">{mockSummary.title}</h3>
          </div>
          <div className="text-sm text-[#FFE990]/70">
            Processed on: {mockSummary.date}
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-[#FFE990]/90 whitespace-pre-line">
              {mockSummary.summary}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 text-[#FFE990]/70">
          Upload a document to see its summary
        </div>
      )}
    </div>
  )
}

