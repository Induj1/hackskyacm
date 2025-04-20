
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CodeOfConductDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-cyber-green hover:underline">code of conduct</DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">Code of Conduct</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-gray-300">
          <h3 className="text-xl font-semibold text-white">Expected Behavior</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Be respectful and inclusive of all participants</li>
            <li>Collaborate and communicate professionally</li>
            <li>Follow all hackathon rules and guidelines</li>
            <li>Report any violations or concerns to organizers</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Unacceptable Behavior</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Harassment or discrimination of any kind</li>
            <li>Disruptive or disrespectful behavior</li>
            <li>Sharing inappropriate or offensive content</li>
            <li>Violating intellectual property rights</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Consequences</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Violations may result in immediate disqualification</li>
            <li>Removal from the hackathon</li>
            <li>Ban from future events</li>
            <li>Legal action if necessary</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">Reporting</h3>
          <p>
            If you experience or witness any violations of this code of conduct, please report them immediately to the hackathon organizers at acm.mitblr@manipal.edu
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
