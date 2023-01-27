import overview from "../assets/images/stats-icon.svg";
import tickets from "../assets/images/tickets.svg";
import ideas from "../assets/images/ideas.svg";
import contacts from "../assets/images/contacts.svg";
import agents from "../assets/images/agents.svg";
import articles from "../assets/images/articles.svg";
import settings from "../assets/images/settings.svg";
import subscription from "../assets/images/subscription.svg";
import profile1 from "../assets/images/profile1.png"
import profile2 from "../assets/images/profile2.png"
import profile3 from "../assets/images/profile3.png"
import profile4 from "../assets/images/profile4.png"
import profile5 from "../assets/images/profile5.png"
import profile6 from "../assets/images/profile6.png"
import profile7 from "../assets/images/profile7.png"
import profile8 from "../assets/images/profile8.png"
import toggle from "../assets/images/toggle.png"

export const LinksData = [
  {
    text: "Overview",
    img: overview,
  },
  {
    text: "Tickets",
    img: tickets,
  },
  {
    text: "Ideas",
    img: ideas,
  },
  {
    text: "Contacts",
    img: contacts,
  },
  {
    text: "Agents",
    img: agents,
  },
  {
    text: "Articles",
    img: articles,
  },
  {
    text: "Settings",
    img: settings,
  },
  {
    text: "Subscribtion",
    img: subscription,
  },
];

export const SolvedList = [
  {
    text: "Unresolved",
    number: 60,
  },
  {
    text: "Overdue",
    number: 16,
  },
  {
    text: "Open",
    number: 43,
  },
  {
    text: "On hold",
    number: 64,
  },
];

export const StatsList = [
  {
    text: "Resolved",
    number: 449,
  },
  {
    text: "Reseived",
    number: 426,
  },
  {
    text: "Average first response time",
    number: "33m",
  },
  {
    text: "Average response time",
    number: "3h 8m",
  },
  {
    text: "Resolution within SLA",
    number: "94%",
  },
];

export const Tikets  = [
  {
    img: profile1,
    ticketName: "Contact Email not Linked",
    ticketInformation: "Updated 1 day ago",
    customerName: "Tom Cruise",
    dateCustomer: "on 24.05.2019",
    dateLabel: "May 26, 2019",
    timeLabel: "6:30 PM",
    priority: "HIGH",
    priorityStyle: "high priorityAll",
    more:toggle,
  },
  {
    img: profile2,
    ticketName: "Adding Images to Featured Posts",
    ticketInformation: "Updated 1 day ago",
    customerName: "Matt Damon",
    dateCustomer: "on 24.05.2019",
    dateLabel: "May 26, 2019",
    timeLabel: "8:00 AM",
    priority: "LOW",
    priorityStyle: "low priorityAll",
    more:toggle,
  },
  {
    img: profile3,
    ticketName: "When will I be charged this month?",
    ticketInformation: "Updated 1 day ago",
    customerName: "Robert Downey",
    dateCustomer: "on 24.05.2019",
    dateLabel: "May 26, 2019",
    timeLabel: "7:30 PM",
    priority: "HIGH",
    priorityStyle: "high priorityAll",
    more:toggle,
  },
  {
    img: profile4,
    ticketName: "Payment not going through",
    ticketInformation: "Updated 2 days ago",
    customerName: "Christian Bale",
    dateCustomer: "on 24.05.2019",
    dateLabel: "May 25, 2019",
    timeLabel: "5:00 PM",
    priority: "NORMAL",
    priorityStyle: "normal priorityAll",
    more:toggle,
  },
  {
    img: profile5,
    ticketName: "Unable to add replies",
    ticketInformation: "Updated 2 days ago",
    customerName: "Henry Cavil",
    dateCustomer: "on 24.05.2019",
    dateLabel: "May 25, 2019",
    timeLabel: "4:00 PM",
    priority: "HIGH",
    priorityStyle: "high priorityAll",
    more:toggle,
  },
  {
    img: profile6,
    ticketName: "Downtime since last week",
    ticketInformation: "Updated 3 days ago",
    customerName: "Chris Evans",
    dateCustomer: "on 23.05.2019",
    dateLabel: "May 25, 2019",
    timeLabel: "2:00 PM",
    priority: "NORMAL",
    priorityStyle: "normal priorityAll",
    more:toggle,
  },
  {
    img: profile7,
    ticketName: "Referral Bonus",
    ticketInformation: "Updated 4 day ago",
    customerName: "Sam Smith",
    dateCustomer: "on 22.05.2019",
    dateLabel: "May 25, 2019",
    timeLabel: "11:30 AM",
    priority: "LOW",
    priorityStyle: "low priorityAll",
    more:toggle,
  },
  {
    img: profile8,
    ticketName: "How do I change my password?",
    ticketInformation: "Updated 6 days ago",
    customerName: "Steve Rogers",
    dateCustomer: "on 21.05.2019",
    dateLabel: "May 24, 2019",
    timeLabel: "1:00 PM",
    priority: "NORMAL",
    priorityStyle: "normal priorityAll",
    more:toggle,
  },
 
];