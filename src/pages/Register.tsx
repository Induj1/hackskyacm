
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

// Update the schema for team registration
const teamFormSchema = z.object({
  teamName: z.string().min(2, { message: 'Team name must be at least 2 characters.' }),
  teamSize: z.string({ required_error: 'Please select team size.' }),
  leaderName: z.string().min(2, { message: 'Leader name must be at least 2 characters.' }),
  leaderEmail: z.string().email({ message: 'Please enter a valid email address.' }),
  leaderPhone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  institution: z.string().min(2, { message: 'Please enter your institution or company name.' }),
  track: z.string({ required_error: 'Please select a track.' }),
  teamMembers: z.string().min(10, { message: 'Please provide team members\' details.' }),
  projectIdea: z.string().min(10, { message: 'Please describe your project idea briefly.' }),
  termsAccepted: z.boolean()
    .refine(val => val === true, {
      message: 'You must accept the terms and conditions.',
    }),
});

type TeamFormValues = z.infer<typeof teamFormSchema>;

const Register = () => {
  const { toast } = useToast();

  const teamForm = useForm<TeamFormValues>({
    resolver: zodResolver(teamFormSchema),
    defaultValues: {
      teamName: '',
      leaderName: '',
      leaderEmail: '',
      leaderPhone: '',
      institution: '',
      teamMembers: '',
      projectIdea: '',
      termsAccepted: false,
    },
  });

  const onTeamSubmit = (data: TeamFormValues) => {
    console.log('Team registration data:', data);
    toast({
      title: 'Registration Submitted',
      description: 'Your team registration has been received. Check your email for confirmation.',
    });
    teamForm.reset();
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">Register for the Hackathon</h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Join us for an exciting weekend of innovation and problem-solving.
              </p>
              
              <div className="bg-cyber-darker p-6 rounded-lg border border-cyber-green/20 mb-10">
                <h2 className="text-xl font-bold mb-4">Registration Details</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Registration is free for all participants</li>
                  <li>Last date to register: July 1, 2025</li>
                  <li>Teams should have 1-3 members</li>
                  <li>Confirmation emails will be sent within 48 hours</li>
                </ul>
              </div>
              
              <div className="bg-cyber-gray/30 p-6 rounded-lg border border-cyber-green/10">
                <Form {...teamForm}>
                  <form onSubmit={teamForm.handleSubmit(onTeamSubmit)} className="space-y-6">
                    <FormField
                      control={teamForm.control}
                      name="teamName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Name</FormLabel>
                          <FormControl>
                            <Input placeholder="CyberDefenders" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={teamForm.control}
                      name="teamSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Size</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">1 Member</SelectItem>
                              <SelectItem value="2">2 Members</SelectItem>
                              <SelectItem value="3">3 Members</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="p-4 border border-cyber-green/10 rounded-md bg-cyber-gray/20 space-y-6">
                      <h3 className="text-lg font-semibold">Team Leader Information</h3>
                      
                      <FormField
                        control={teamForm.control}
                        name="leaderName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={teamForm.control}
                          name="leaderEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john.doe@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={teamForm.control}
                          name="leaderPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 123 456 7890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <FormField
                      control={teamForm.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institution/Company</FormLabel>
                          <FormControl>
                            <Input placeholder="MIT-BLR / Kaspersky" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={teamForm.control}
                      name="track"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Selected Track</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a track" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="malware">Malware Detection</SelectItem>
                              <SelectItem value="blockchain">Blockchain Security</SelectItem>
                              <SelectItem value="secure-coding">Secure Coding</SelectItem>
                              <SelectItem value="iot">IoT Security</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={teamForm.control}
                      name="teamMembers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Members</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="List all team members with their names, emails, and roles (e.g., Jane Doe, jane@example.com, ML Engineer)"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={teamForm.control}
                      name="projectIdea"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Idea (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Brief description of your project idea if you already have one"
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            You can change your idea during the hackathon. This helps us understand your interests.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={teamForm.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-cyber-gray/20">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I accept the terms and conditions
                            </FormLabel>
                            <FormDescription>
                              By registering, you agree to the <a href="#" className="text-cyber-green hover:underline">hackathon rules</a> and <a href="#" className="text-cyber-green hover:underline">code of conduct</a>.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Submit Registration</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
