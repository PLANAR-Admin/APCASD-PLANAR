import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), ".data");

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  createdAt: string;
}

interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone?: string;
  position: string;
  resume?: string;
  coverLetter?: string;
  createdAt: string;
}

interface CareerListing {
  id: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  active: boolean;
  createdAt: string;
}

function ensureDataDir() {
  try {
    if (!existsSync(DATA_DIR)) {
      mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (e) {
    console.error("Failed to create data directory:", e);
  }
}

function getFilePath(name: string) {
  return join(DATA_DIR, `${name}.json`);
}

function readData<T>(name: string, defaultValue: T): T {
  try {
    ensureDataDir();
    const path = getFilePath(name);
    if (!existsSync(path)) {
      return defaultValue;
    }
    const content = readFileSync(path, "utf-8");
    return JSON.parse(content) as T;
  } catch (e) {
    console.error(`Failed to read ${name}:`, e);
    return defaultValue;
  }
}

function writeData<T>(name: string, data: T): boolean {
  try {
    ensureDataDir();
    const path = getFilePath(name);
    writeFileSync(path, JSON.stringify(data, null, 2));
    return true;
  } catch (e) {
    console.error(`Failed to write ${name}:`, e);
    return false;
  }
}

export const storage = {
  contacts: {
    add(contact: Omit<ContactSubmission, "id" | "createdAt">) {
      const contacts = readData<ContactSubmission[]>("contacts", []);
      const newContact: ContactSubmission = {
        ...contact,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        createdAt: new Date().toISOString(),
      };
      contacts.push(newContact);
      writeData("contacts", contacts);
      return newContact;
    },
    getAll() {
      return readData<ContactSubmission[]>("contacts", []).reverse();
    },
    getById(id: string) {
      const contacts = readData<ContactSubmission[]>("contacts", []);
      return contacts.find((c) => c.id === id);
    },
    delete(id: string) {
      const contacts = readData<ContactSubmission[]>("contacts", []);
      const filtered = contacts.filter((c) => c.id !== id);
      return writeData("contacts", filtered);
    },
  },
  careers: {
    addApplication(app: Omit<CareerApplication, "id" | "createdAt">) {
      const apps = readData<CareerApplication[]>("career-applications", []);
      const newApp: CareerApplication = {
        ...app,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        createdAt: new Date().toISOString(),
      };
      apps.push(newApp);
      writeData("career-applications", apps);
      return newApp;
    },
    getApplications() {
      return readData<CareerApplication[]>("career-applications", []).reverse();
    },
    getApplicationById(id: string) {
      const apps = readData<CareerApplication[]>("career-applications", []);
      return apps.find((a) => a.id === id);
    },
    deleteApplication(id: string) {
      const apps = readData<CareerApplication[]>("career-applications", []);
      const filtered = apps.filter((a) => a.id !== id);
      return writeData("career-applications", filtered);
    },
    addListing(listing: Omit<CareerListing, "id" | "createdAt">) {
      const listings = readData<CareerListing[]>("career-listings", []);
      const newListing: CareerListing = {
        ...listing,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
        createdAt: new Date().toISOString(),
      };
      listings.push(newListing);
      writeData("career-listings", listings);
      return newListing;
    },
    getListings() {
      return readData<CareerListing[]>("career-listings", []);
    },
    getActiveListings() {
      const listings = readData<CareerListing[]>("career-listings", []);
      return listings.filter((l) => l.active);
    },
    getListingById(id: string) {
      const listings = readData<CareerListing[]>("career-listings", []);
      return listings.find((l) => l.id === id);
    },
    updateListing(id: string, updates: Partial<CareerListing>) {
      const listings = readData<CareerListing[]>("career-listings", []);
      const index = listings.findIndex((l) => l.id === id);
      if (index === -1) return false;
      listings[index] = { ...listings[index], ...updates };
      return writeData("career-listings", listings);
    },
    deleteListing(id: string) {
      const listings = readData<CareerListing[]>("career-listings", []);
      const filtered = listings.filter((l) => l.id !== id);
      return writeData("career-listings", filtered);
    },
  },
};
