import { DocumentUpload } from "@/components/document-upload";
import { DocumentSummary } from "@/components/document-summary";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-900 font-[var(--font-inter)]">
      <main className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-[#FFE990] font-[var(--font-playfair)]">
          Legal Document Summarizer
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <DocumentUpload />
          <DocumentSummary />
        </div>
      </main>
    </div>
  );
}
