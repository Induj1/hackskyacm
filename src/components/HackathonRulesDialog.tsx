import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function HackathonRulesDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-cyber-green hover:underline">hackathon rules</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">HackSky Hackathon Rules</DialogTitle>
          <DialogDescription className="text-amber-400">
            These Rules and Regulations apply to the Hackathon only (July 29-30, 2025), and not to the KIPS competition scheduled on July 31st, 2025.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-gray-300">
          <h3 className="text-xl font-semibold text-white">General Rules</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>All team members must be residents of India aged 16-25 years enrolled at academic institutions in India</li>
            <li>Teams must consist of 1-3 members</li>
            <li>All project work must be original and created during the hackathon</li>
            <li>Use of open-source libraries and frameworks is allowed</li>
            <li>Projects must address one of the specified hackathon tracks</li>
            <li>Registration deadline is July 5, 2025</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Code of Ethics</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>No plagiarism or use of pre-existing projects</li>
            <li>Respect intellectual property rights</li>
            <li>No malicious code or harmful content</li>
            <li>Maintain professional conduct throughout the event</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Submission Guidelines</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Projects must be submitted before the deadline</li>
            <li>Include all source code and documentation</li>
            <li>Prepare a presentation for judging</li>
            <li>Submit via the designated platform</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Judging Criteria</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Accordance with the track</li>
            <li>Unique selling proposition (USP)</li>
            <li>Technical feasibility</li>
            <li>Proof of concept (PoC)</li>
            <li>Level of security and patentability</li>
            <li>Scalability and deployment readiness</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}