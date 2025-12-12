# n8n-nodes-transistorfm

An **n8n community node** for integrating the **Transistor.fm API** into your workflows.

With this node you can manage podcasts hosted on Transistor.fm, including shows, episodes, subscribers, webhooks, and analytics — directly from n8n.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

---

## Installation

Follow the official n8n guide for installing community nodes:

👉 https://docs.n8n.io/integrations/community-nodes/installation/

Once installed, search for **Transistorfm** in the n8n node picker.

---

## Supported Resources & Operations

### User

| Operation | Description                     |
| --------- | ------------------------------- |
| Get Me    | Retrieve the authenticated user |

### Shows

| Operation | Description                                           |
| --------- | ----------------------------------------------------- |
| Get All   | List all shows (filter by query, private, pagination) |
| Get       | Retrieve a single show by ID                          |
| Update    | Update show metadata                                  |

### Episodes

| Operation                      | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| Get All                        | List episodes for a show (query, status, order, pagination) |
| Get                            | Retrieve a single episode                                   |
| Authorize Upload               | Get a pre-signed upload URL for audio files                 |
| Upload Audio                   | Upload audio to the pre-signed URL (PUT)                    |
| Create                         | Create a new draft episode                                  |
| Update                         | Update an existing episode                                  |
| Publish / Schedule / Unpublish | Control publishing state                                    |

### Subscribers

| Operation           | Description                       |
| ------------------- | --------------------------------- |
| Get All             | List subscribers for a show       |
| Get                 | Retrieve a subscriber             |
| Create              | Create a single subscriber        |
| Create Many (Batch) | Create subscribers in bulk        |
| Update              | Update subscriber email           |
| Delete by Email     | Delete subscriber by email + show |
| Delete by ID        | Delete subscriber by ID           |

### Webhooks

| Operation | Description                 |
| --------- | --------------------------- |
| Get All   | List all webhooks           |
| Create    | Subscribe to webhook events |
| Delete    | Delete a webhook            |

### Analytics

| Operation                 | Description                                  |
| ------------------------- | -------------------------------------------- |
| Get Show Analytics        | Downloads per day for a show                 |
| Get All Episode Analytics | Downloads per day for all episodes of a show |
| Get Episode Analytics     | Downloads per day for a single episode       |

---

## Credentials

This node uses the **Transistor.fm API Key** for authentication.

### Prerequisites

- A Transistor.fm account
- An API key (available in the Transistor.fm dashboard)

### Setup in n8n

1. Open **Credentials**
2. Create new credentials of type **Transistorfm API**
3. Paste your API key
4. Save

The API key is sent via the `x-api-key` request header.

---

## Usage Notes

### Audio Upload Workflow

Uploading audio files is a **two-step process**:

1. **Authorize Upload**  
   Generates a pre-signed `upload_url`, `content_type`, and `audio_url`

2. **Upload Audio**  
   Upload the binary audio file via HTTP `PUT` to the `upload_url`

After a successful upload, use the returned `audio_url` when creating or updating an episode.

---

## Resources

- Transistor.fm API Documentation  
  https://developers.transistor.fm

- n8n Community Nodes Documentation  
  https://docs.n8n.io/integrations/#community-nodes

---

## License

MIT
