"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Briefcase, CheckCircle2, LogOut, X, Edit2 } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
  created_at: string;
}

interface CareerApplication {
  id: string;
  name: string;
  email: string;
  phone?: string;
  position: string;
  cover_letter?: string;
  created_at: string;
}

interface CareerListing {
  id: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  active: boolean;
  created_at: string;
}

type Tab = "contacts" | "applications" | "listings";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [listings, setListings] = useState<CareerListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    description: "",
    requirements: "",
    active: true,
  });

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  async function checkAuth() {
    try {
      const res = await fetch("/api/admin/contacts");
      if (res.status === 401) {
        router.push("/admin/login");
      }
    } catch (err) {
      router.push("/admin/login");
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      const [contactsRes, applicationsRes, listingsRes] = await Promise.all([
        fetch("/api/admin/contacts"),
        fetch("/api/admin/careers/applications"),
        fetch("/api/admin/careers/listings"),
      ]);

      if (contactsRes.ok) {
        const data = await contactsRes.json();
        setContacts(data.contacts || []);
      }
      if (applicationsRes.ok) {
        const data = await applicationsRes.json();
        setApplications(data.applications || []);
      }
      if (listingsRes.ok) {
        const data = await listingsRes.json();
        setListings(data.listings || []);
      }
    } catch (err) {
      setError("Failed to load data");
    }
    setLoading(false);
  }

  async function deleteContact(id: string) {
    if (!confirm("Delete this contact?")) return;
    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setContacts(contacts.filter((c) => c.id !== id));
      }
    } catch (err) {
      alert("Failed to delete");
    }
  }

  async function deleteApplication(id: string) {
    if (!confirm("Delete this application?")) return;
    try {
      const res = await fetch(`/api/admin/careers/applications?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setApplications(applications.filter((a) => a.id !== id));
      }
    } catch (err) {
      alert("Failed to delete");
    }
  }

  async function deleteListing(id: string) {
    if (!confirm("Delete this listing?")) return;
    try {
      const res = await fetch(`/api/admin/careers/listings?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setListings(listings.filter((l) => l.id !== id));
      }
    } catch (err) {
      alert("Failed to delete");
    }
  }

  async function toggleListing(id: string, active: boolean) {
    try {
      const res = await fetch(`/api/admin/careers/listings?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: !active }),
      });
      if (res.ok) {
        setListings(
          listings.map((l) => (l.id === id ? { ...l, active: !l.active } : l))
        );
      }
    } catch (err) {
      alert("Failed to update");
    }
  }

  function startEdit(listing: CareerListing) {
    setEditingId(listing.id);
    setFormData({
      title: listing.title,
      department: listing.department,
      description: listing.description,
      requirements: listing.requirements.join("\n"),
      active: listing.active,
    });
  }

  async function saveListingForm() {
    if (!formData.title || !formData.department || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    const requirementsArray = formData.requirements
      .split("\n")
      .filter((r) => r.trim());

    if (requirementsArray.length === 0) {
      alert("Please add at least one requirement");
      return;
    }

    const payload = {
      title: formData.title,
      department: formData.department,
      description: formData.description,
      requirements: requirementsArray,
      active: formData.active,
    };

    try {
      if (editingId) {
        // Update existing
        const res = await fetch(`/api/admin/careers/listings?id=${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setListings(
            listings.map((l) =>
              l.id === editingId ? { ...l, ...payload } : l
            )
          );
          resetForm();
        } else {
          alert("Failed to update listing");
        }
      } else {
        // Create new
        const res = await fetch("/api/admin/careers/listings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          const data = await res.json();
          setListings([data.listing, ...listings]);
          resetForm();
        } else {
          alert("Failed to create listing");
        }
      }
    } catch (err) {
      alert("Failed to save listing");
    }
  }

  function resetForm() {
    setShowCreateForm(false);
    setEditingId(null);
    setFormData({
      title: "",
      department: "",
      description: "",
      requirements: "",
      active: true,
    });
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-border bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-darkblue">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-crimson px-4 py-2 text-sm font-semibold text-white hover:bg-crimson/90"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex items-center gap-2 border-b-2 px-0 py-4 text-sm font-semibold transition-colors ${
                activeTab === "contacts"
                  ? "border-darkblue text-darkblue"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              <Mail className="h-4 w-4" />
              Contacts ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`flex items-center gap-2 border-b-2 px-0 py-4 text-sm font-semibold transition-colors ${
                activeTab === "applications"
                  ? "border-darkblue text-darkblue"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Applications ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab("listings")}
              className={`flex items-center gap-2 border-b-2 px-0 py-4 text-sm font-semibold transition-colors ${
                activeTab === "listings"
                  ? "border-darkblue text-darkblue"
                  : "border-transparent text-muted hover:text-foreground"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              Listings ({listings.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {error && (
          <div className="mb-4 rounded-lg bg-crimson/10 p-4 text-sm text-crimson">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted">Loading...</p>
          </div>
        ) : (
          <>
            {/* Contacts Tab */}
            {activeTab === "contacts" && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <div className="rounded-lg border border-border bg-white p-8 text-center">
                    <p className="text-muted">No contacts yet</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="rounded-lg border border-border bg-white p-6"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <p className="font-semibold text-foreground">{contact.name}</p>
                          <p className="text-sm text-muted">{contact.email}</p>
                          {contact.phone && (
                            <p className="text-sm text-muted">{contact.phone}</p>
                          )}
                          {contact.company && (
                            <p className="text-sm text-muted">{contact.company}</p>
                          )}
                          {contact.service && (
                            <p className="text-xs text-foreground/60 mt-1">
                              Service: {contact.service}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-xs text-muted">
                            {new Date(contact.created_at).toLocaleString()}
                          </p>
                          <p className="text-sm text-foreground line-clamp-2">
                            {contact.message}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="mt-4 text-xs font-semibold text-crimson hover:text-crimson/80"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === "applications" && (
              <div className="space-y-4">
                {applications.length === 0 ? (
                  <div className="rounded-lg border border-border bg-white p-8 text-center">
                    <p className="text-muted">No applications yet</p>
                  </div>
                ) : (
                  applications.map((app) => (
                    <div
                      key={app.id}
                      className="rounded-lg border border-border bg-white p-6"
                    >
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <p className="font-semibold text-foreground">{app.name}</p>
                          <p className="text-sm text-muted">{app.email}</p>
                          {app.phone && (
                            <p className="text-sm text-muted">{app.phone}</p>
                          )}
                          <p className="text-sm font-medium text-darkblue mt-2">
                            {app.position}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-xs text-muted">
                            {new Date(app.created_at).toLocaleString()}
                          </p>
                          {app.cover_letter && (
                            <p className="text-sm text-foreground line-clamp-2">
                              {app.cover_letter}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteApplication(app.id)}
                        className="mt-4 text-xs font-semibold text-crimson hover:text-crimson/80"
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Listings Tab */}
            {activeTab === "listings" && (
              <div className="space-y-4">
                {/* Create/Edit Form */}
                {(showCreateForm || editingId) && (
                  <div className="rounded-lg border border-border bg-white p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-foreground">
                        {editingId ? "Edit Job Listing" : "Create New Job Listing"}
                      </h3>
                      <button
                        onClick={resetForm}
                        className="text-muted hover:text-foreground"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          placeholder="e.g., Senior HR Manager"
                          className="w-full rounded-lg border border-border bg-white px-4 py-2 text-sm outline-none focus:border-darkblue"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1">
                          Department *
                        </label>
                        <input
                          type="text"
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({ ...formData, department: e.target.value })
                          }
                          placeholder="e.g., Human Resources"
                          className="w-full rounded-lg border border-border bg-white px-4 py-2 text-sm outline-none focus:border-darkblue"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1">
                          Job Description *
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
                          placeholder="Describe the role, responsibilities, and what you're looking for..."
                          rows={5}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2 text-sm outline-none focus:border-darkblue"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-1">
                          Key Requirements * (one per line)
                        </label>
                        <textarea
                          value={formData.requirements}
                          onChange={(e) =>
                            setFormData({ ...formData, requirements: e.target.value })
                          }
                          placeholder="5+ years of HR experience&#10;Strong communication skills&#10;MBA preferred"
                          rows={4}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2 text-sm outline-none focus:border-darkblue font-mono text-xs"
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="active"
                          checked={formData.active}
                          onChange={(e) =>
                            setFormData({ ...formData, active: e.target.checked })
                          }
                          className="h-4 w-4 rounded border-border"
                        />
                        <label htmlFor="active" className="text-sm font-semibold text-foreground">
                          Active (visible on careers page)
                        </label>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <button
                          onClick={saveListingForm}
                          className="flex-1 rounded-lg bg-darkblue px-4 py-2 text-sm font-semibold text-white hover:bg-darkblue/90"
                        >
                          {editingId ? "Update Listing" : "Create Listing"}
                        </button>
                        <button
                          onClick={resetForm}
                          className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Create Button */}
                {!showCreateForm && !editingId && (
                  <button
                    onClick={() => setShowCreateForm(true)}
                    className="rounded-lg bg-darkblue px-4 py-2 text-sm font-semibold text-white hover:bg-darkblue/90"
                  >
                    + Create New Job Listing
                  </button>
                )}

                {/* Listings List */}
                <div className="space-y-4">
                  {listings.length === 0 ? (
                    <div className="rounded-lg border border-border bg-white p-8 text-center">
                      <p className="text-muted">No listings yet</p>
                    </div>
                  ) : (
                    listings.map((listing) => (
                      <div
                        key={listing.id}
                        className="rounded-lg border border-border bg-white p-6"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-semibold text-foreground">{listing.title}</p>
                            <p className="text-sm text-muted">{listing.department}</p>
                            <p className="text-sm text-foreground mt-2 line-clamp-2">
                              {listing.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {listing.requirements.slice(0, 3).map((req, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                >
                                  {req}
                                </span>
                              ))}
                              {listing.requirements.length > 3 && (
                                <span className="text-xs text-muted">
                                  +{listing.requirements.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="ml-4 flex flex-col gap-2">
                            <button
                              onClick={() => toggleListing(listing.id, listing.active)}
                              className={`px-3 py-1 rounded text-xs font-semibold ${
                                listing.active
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {listing.active ? "Active" : "Inactive"}
                            </button>
                            <button
                              onClick={() => startEdit(listing)}
                              className="flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold text-darkblue bg-blue-50 hover:bg-blue-100"
                            >
                              <Edit2 className="h-3 w-3" />
                              Edit
                            </button>
                            <button
                              onClick={() => deleteListing(listing.id)}
                              className="px-3 py-1 rounded text-xs font-semibold text-crimson hover:bg-crimson/10"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-muted mt-3">
                          Created: {new Date(listing.created_at).toLocaleString()}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
