
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
        </DialogHeader>
        <div className="space-y-4 text-gray-300">
          <h3 className="text-xl font-semibold text-white">General Rules</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>All team members must be registered participants of the hackathon</li>
            <li>Teams must consist of 1-3 members</li>
            <li>All project work must be original and created during the hackathon</li>
            <li>Use of open-source libraries and frameworks is allowed</li>
            <li>Projects must address one of the specified hackathon tracks</li>
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
            <li>Prepare a presentation and demo video</li>
            <li>Submit via the designated platform</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Judging Criteria</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Innovation and creativity</li>
            <li>Technical implementation</li>
            <li>Practicality and real-world application</li>
            <li>Presentation quality</li>
            <li>Adherence to chosen track requirements</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
