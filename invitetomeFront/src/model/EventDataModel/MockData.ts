import { EventData } from "./EventData";

export const mockData : EventData = {
    eventId: "EVENT_009",
    core: {
      generalData: {
        country: "Spain",
        venue: "Parc del Fòrum",
        address: "Parc del Fòrum, Barcelona",
        city: "Barcelona",
        endDate: "2025-06-01T23:59:00Z",
        postalCode: "08019",
        description: "One of Europe's biggest music festivals, featuring a diverse lineup of international artists.",
        edition: "25th Anniversary Edition",
        daysQty: 4,
        type: "CONCERT",
        logoUrl: "https://example.com/primavera-logo.png",
        createdBy: "admin",
        phone: "+34 933 01 00 90",
        websiteUrl: "https://www.primaverasound.com",
        yearEdition: 2025,
        name: "Primavera Sound 2025",
        modifiedBy: "editor",
        tag: "MusicFestival",
        startDate: "2025-05-29T12:00:00Z",
        eventCode: "PS2025",
        previewImageUrl: "https://example.com/primavera-preview.png",
        gates: ["Gate A", "Gate B", "VIP Entrance"]
      },
      eventDates: [
        {
          "day#1": "2025-05-29T12:00:00Z"
        },
        {
          "day#2": "2025-05-30T12:00:00Z"
        },
        {
          "day#3": "2025-05-31T12:00:00Z"
        },
        {
          "day#4": "2025-06-01T12:00:00Z"
        },
        {
          "day#44": {
            "day#44-1": "2025-05-31T12:00:00Z"
          }
        }
      ],
      quotes: {
        "BACKSTAGE": 50,
        "COMPROMIS": 50,
        "GENERAL": 50,
        "VIP": 50
      },
      status: "Active"
    },
    "invitation#INV004": {
      "type": "PERSONAL",
      "sentDate": "2025-05-22T11:05:00Z",
      "phone": "+1 555-123-4567",
      "emailSent": true,
      "emailOpened": true,
      "name": "John Doe",
      "emailReceived": true,
      "bundle": "bundle#03#staff",
      "socialUrls": {},
      "email": "john.doe@example.com",
      "qrValidated": false,
      "status": "accepted"
    },
    "invitation#INV003": {
      "type": "BUSINESS",
      "sentDate": "2025-05-21T09:20:00Z",
      "phone": "+1 555-987-6543",
      "emailSent": true,
      "emailOpened": false,
      "name": "Jane Smith",
      "company": "Tech Solutions Inc.",
      "qrValidatedAt": "2025-05-29T12:10:00Z",
      "emailReceived": true,
      "bundle": "bundle#02#redbull",
      "socialUrls": {},
      "email": "jane.smith@company.com",
      "qrValidated": true,
      "status": "accepted"
    },
    "invitation#INV002": {
      "type": "FAMILY",
      "sentDate": "2025-05-20T14:36:00Z",
      "phone": "+1 555-246-8135",
      "emailSent": true,
      "emailOpened": false,
      "name": "Robert Johnson",
      "emailReceived": false,
      "bundle": "bundle#01#cocacola",
      "socialUrls": {},
      "email": "robert.johnson@family.net",
      "qrValidated": false,
      "status": "pending"
    },
    artists: {
      artists: [
        {
          "headliner": true,
          "genre": "Pop/Alternative",
          "name": "Billie Eilish",
          "id": 1
        },
        {
          "headliner": true,
          "genre": "Psychedelic Rock",
          "name": "Tame Impala",
          "id": 2
        },
        {
          "festivals": {},
          "headliner": true,
          "genre": "R&B/Pop",
          "name": "The Weeknd",
          "id": 3
        },
        {
          "headliner": true,
          "genre": "EDM",
          "name": "Martin Garrix",
          "id": 4
        },
        {
          "headliner": true,
          "genre": "Hip-Hop",
          "name": "Kendrick Lamar",
          "id": 5
        }
      ],
      artistsQty: 5
    },
    "invitation#INV001": {
      "country": "USA",
      "address": "123 Main St",
      "city": "Anytown",
      "postalCode": "12345",
      "description": "Long-time client",
      "type": "PERSONAL",
      "sentDate": "2025-05-20T14:35:00Z",
      "createdBy": "system",
      "phone": "+1 555-123-4567",
      "emailSent": true,
      "emailOpened": true,
      "name": "John Doe",
      "modifiedBy": "admin",
      "qrValidatedAt": "2025-05-29T12:05:00Z",
      "tag": "VIP",
      "emailReceived": true,
      "bundle": "bundle#01#cocacola",
      "socialUrls": {},
      "email": "john.doe@example.com",
      "qrValidated": true,
      "status": "accepted"
    },
    "bundle#01#google": {
      "accepted": 180,
      "sent": 190,
      "totalInvitations": 200,
      "contacts": [
        {
          "name": "John Doe",
          "email": "john.doe@coke.com"
        },
        {
          "name": "Alice Brown",
          "email": "alice.brown@coke.com"
        },
        {
          "name": "John Doe",
          "email": "john.doe@coke.com"
        },
        {
          "name": "Alice Brown",
          "email": "alice.brown@coke.com"
        },
        {
          "name": "John Doe",
          "email": "john.doe@coke.com"
        },
        {
          "name": "Alice Brown",
          "email": "alice.brown@coke.com"
        }
      ],
      "templates": [
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        },
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        },
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        },
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        }
      ]
    },
    sync: {
      timestamps: {
        core: "2025-03-28T10:00:00Z",
        "invitation#INV004": "2025-05-29T12:05:00Z",
        "invitation#INV003": "2025-05-29T12:05:00Z",
        "invitation#INV002": "2025-05-29T12:05:00Z",
        "invitation#INV001": "2025-05-29T12:05:00Z",
        bundles: "2025-05-29T12:05:00Z",
        "bundle#03#staff": "2025-05-22T11:00:00Z",
        artists: "2025-05-29T12:05:00Z",
        "bundle#02#redbull": "2025-05-21T09:15:00Z",
        "bundle#01#cocacola": "2025-05-20T14:30:00Z",
        statistics: "2025-05-29T12:05:00Z"
      }
    },
    "bundle#01#cocacola": {
      "accepted": 180,
      "sent": 190,
      "totalInvitations": 200,
      "contacts": [
        {
          "name": "John Doe",
          "email": "john.doe@coke.com"
        },
        {
          "name": "Alice Brown",
          "email": "alice.brown@coke.com"
        },
        {
          "name": "John Doe",
          "email": "john.doe@coke.com"
        },
        {
          "name": "Alice Brown",
          "email": "alice.brown@coke.com"
        },
        {
          "name": "John Doe",
          "email": "john.doe@coke.com"
        },
        {
          "name": "Alice Brown",
          "email": "alice.brown@coke.com"
        }
      ],
      "templates": [
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        },
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        },
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        },
        {
          "subject": "VIP Pass - Primavera Sound 2025",
          "id": "vip",
          "body": "Welcome to the VIP experience sponsored by Coca-Cola!"
        }
      ]
    },
    statistics: {
      statisticsData: {
        openRate: 0.7,
        totalScans: 400,
        attendanceRate: 0.83
      }
    }
  }