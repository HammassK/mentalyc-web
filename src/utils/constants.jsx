export const NavLinks = [
  { name: "New notes", link: "/notes" },
  { name: "Clients", link: "/clients" },
  { name: "Clinicians", link: "/clinicians" },
  { name: "Templates", link: "/templates" },
];

export const tableColumns = [
  { field: "clientName", headerName: "Client name" },
  { field: "clinicianName", headerName: "Clinician name" },
  { field: "clientType", headerName: "Client type" },
  { field: "treatmentPlan", headerName: "Treatment plan" },
  { field: "lastSession", headerName: "Last session" },
  { field: "unsavedNotes", headerName: "Unsaved notes" },
];

export const tableRows = [
  {
    id: 1,
    clientName: "Georgi",
    clinicianName: "Georgi",
    clientType: "Individual",
    treatmentPlan: "Not saved",
    lastSession: "Oct 31, 2023",
    unsavedNotes: 3213,
  },
  {
    id: 2,
    clientName: "John",
    clinicianName: "Anna",
    clientType: "Couple",
    treatmentPlan: "Saved",
    lastSession: "Nov 5, 2023",
    unsavedNotes: 1200,
  },
  {
    id: 3,
    clientName: "Georgi",
    clinicianName: "Georgi",
    clientType: "Individual",
    treatmentPlan: "Missing",
    lastSession: "Oct 31, 2023",
    unsavedNotes: 3213,
  },
  {
    id: 4,
    clientName: "John",
    clinicianName: "Anna",
    clientType: "Couple",
    treatmentPlan: "Missing",
    lastSession: "Nov 5, 2023",
    unsavedNotes: 1200,
  },
  {
    id: 5,
    clientName: "Georgi",
    clinicianName: "Georgi",
    clientType: "Family",
    treatmentPlan: "Saved",
    lastSession: "Oct 31, 2023",
    unsavedNotes: 3213,
  },
  {
    id: 6,
    clientName: "John",
    clinicianName: "Anna",
    clientType: "Child",
    treatmentPlan: "Not saved",
    lastSession: "Nov 5, 2023",
    unsavedNotes: 1200,
  },
  {
    id: 7,
    clientName: "Georgi",
    clinicianName: "Georgi",
    clientType: "Group",
    treatmentPlan: "Saved",
    lastSession: "Oct 31, 2023",
    unsavedNotes: 3213,
  },
  {
    id: 8,
    clientName: "John",
    clinicianName: "Anna",
    clientType: "Family",
    treatmentPlan: "Saved",
    lastSession: "Nov 5, 2023",
    unsavedNotes: 1200,
  },
];