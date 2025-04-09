import { EventData } from "./EventData";

// Structured EventData array based on simple mockEvents
export const mockEventsData: EventData[] = [
    {
      eventId: "EVENT_001",
      core: {
        generalData: {
          country: "Spain",
          venue: "Parc del Fòrum",
          address: "Parc del Fòrum, Barcelona",
          city: "Barcelona",
          endDate: "2025-05-30T23:59:00Z",
          postalCode: "08019",
          description: "One of Europe's biggest music festivals",
          edition: "2025 Edition",
          daysQty: 6,
          type: "CONCERT",
          logoUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop",
          createdBy: "admin",
          phone: "+34 933 01 00 90",
          websiteUrl: "https://www.primaverasound.com",
          yearEdition: 2025,
          name: "Primavera Sound 2025",
          modifiedBy: "system",
          tags: ["music", "festival", "outdoor"],
          startDate: "2025-05-25T12:00:00Z",
          eventCode: "PS2025",
          previewImageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop",
          gates: ["Main Gate", "VIP Gate", "Artist Entrance"]
        },
        eventDates: [
          { "day#1": "2025-05-25T12:00:00Z" },
          { "day#2": "2025-05-26T12:00:00Z" },
          { "day#3": "2025-05-27T12:00:00Z" },
          { "day#4": "2025-05-28T12:00:00Z" },
          { "day#5": "2025-05-29T12:00:00Z" },
          { "day#6": "2025-05-30T12:00:00Z" }
        ],
        quotes: {
          "GENERAL": 1000,
          "VIP": 300,
          "BACKSTAGE": 200
        },
        status: "Upcoming"
      },
      artists: {
        artists: [
          {
            "headliner": true,
            "genre": "Indie Rock",
            "name": "Arctic Monkeys",
            "id": 1
          },
          {
            "headliner": true,
            "genre": "Alternative",
            "name": "Radiohead",
            "id": 2
          },
          {
            "headliner": false,
            "genre": "Electronic",
            "name": "Disclosure",
            "id": 3
          }
        ],
        artistsQty: 3
      },
      statistics: {
        statisticsData: {
          openRate: 0.65,
          totalScans: 0,
          attendanceRate: 0
        }
      },
      sync: {
        timestamps: {
          core: "2025-03-15T10:00:00Z",
          bundles: "2025-03-15T10:00:00Z",
          artists: "2025-03-15T10:00:00Z",
          statistics: "2025-03-15T10:00:00Z"
        }
      }
    },
    {
      eventId: "EVENT_002",
      core: {
        generalData: {
          country: "Spain",
          venue: "MNAC",
          address: "MNAC, Barcelona",
          city: "Barcelona",
          endDate: "2025-04-20T23:59:00Z",
          postalCode: "08038",
          description: "Exhibition featuring contemporary art pieces",
          edition: "Spring 2025",
          daysQty: 11,
          type: "EXHIBITION",
          logoUrl: "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?w=800&auto=format&fit=crop",
          createdBy: "curator",
          phone: "+34 936 22 03 76",
          websiteUrl: "https://www.museunacional.cat",
          yearEdition: 2025,
          name: "Modern Art Exhibition",
          modifiedBy: "admin",
          tags: ["art", "exhibition", "cultural"],
          startDate: "2025-04-10T09:00:00Z",
          eventCode: "MAE2025",
          previewImageUrl: "https://images.unsplash.com/photo-1561488111-5d800fd56b8a?w=800&auto=format&fit=crop",
          gates: ["Main Entrance", "Group Entrance"]
        },
        eventDates: [
          { "day#1": "2025-04-10T09:00:00Z" },
          { "day#2": "2025-04-11T09:00:00Z" },
          { "day#3": "2025-04-12T09:00:00Z" },
          { "day#4": "2025-04-13T09:00:00Z" },
          { "day#5": "2025-04-14T09:00:00Z" },
          { "day#6": "2025-04-15T09:00:00Z" },
          { "day#7": "2025-04-16T09:00:00Z" },
          { "day#8": "2025-04-17T09:00:00Z" },
          { "day#9": "2025-04-18T09:00:00Z" },
          { "day#10": "2025-04-19T09:00:00Z" },
          { "day#11": "2025-04-20T09:00:00Z" }
        ],
        quotes: {
          "GENERAL": 400,
          "VIP": 100
        },
        status: "Draft"
      },
      artists: {
        artists: [
          {
            "headliner": true,
            "genre": "Contemporary",
            "name": "Maria Garcia",
            "id": 1
          },
          {
            "headliner": false,
            "genre": "Modern",
            "name": "Pablo Ruiz",
            "id": 2
          }
        ],
        artistsQty: 2
      },
      statistics: {
        statisticsData: {
          openRate: 0,
          totalScans: 0,
          attendanceRate: 0
        }
      },
      sync: {
        timestamps: {
          core: "2025-03-01T14:30:00Z",
          bundles: "2025-03-01T14:30:00Z",
          artists: "2025-03-01T14:30:00Z",
          statistics: "2025-03-01T14:30:00Z"
        }
      }
    },
    {
      eventId: "EVENT_003",
      core: {
        generalData: {
          country: "Spain",
          venue: "Parc del Fòrum",
          address: "Parc del Fòrum, Barcelona",
          city: "Barcelona",
          endDate: "2025-07-17T23:59:00Z",
          postalCode: "08019",
          description: "Music and arts festival with diverse lineup",
          edition: "2025 Edition",
          daysQty: 3,
          type: "CONCERT",
          logoUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
          createdBy: "admin",
          phone: "+34 935 10 63 61",
          websiteUrl: "https://www.cruillabarcelona.com",
          yearEdition: 2025,
          name: "Cruïlla Festival",
          modifiedBy: "manager",
          tags: ["music", "festival", "arts"],
          startDate: "2025-07-15T16:00:00Z",
          eventCode: "CRUILLA2025",
          previewImageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop",
          gates: ["Main Entrance", "VIP Access", "Staff Entry"]
        },
        eventDates: [
          { "day#1": "2025-07-15T16:00:00Z" },
          { "day#2": "2025-07-16T16:00:00Z" },
          { "day#3": "2025-07-17T16:00:00Z" }
        ],
        quotes: {
          "GENERAL": 600,
          "VIP": 150,
          "BACKSTAGE": 50
        },
        status: "Upcoming"
      },
      artists: {
        artists: [
          {
            "headliner": true,
            "genre": "Pop",
            "name": "Dua Lipa",
            "id": 1
          },
          {
            "headliner": true,
            "genre": "Rock",
            "name": "The Killers",
            "id": 2
          },
          {
            "headliner": false,
            "genre": "Indie",
            "name": "Two Door Cinema Club",
            "id": 3
          }
        ],
        artistsQty: 3
      },
      statistics: {
        statisticsData: {
          openRate: 0.72,
          totalScans: 0,
          attendanceRate: 0
        }
      },
      sync: {
        timestamps: {
          core: "2025-02-20T09:45:00Z",
          bundles: "2025-02-20T09:45:00Z",
          artists: "2025-02-20T09:45:00Z",
          statistics: "2025-02-20T09:45:00Z"
        }
      }
    },
    {
      eventId: "EVENT_004",
      core: {
        generalData: {
          country: "Spain",
          venue: "MNAC",
          address: "MNAC, Barcelona",
          city: "Barcelona",
          endDate: "2025-03-25T20:00:00Z",
          postalCode: "08038",
          description: "Contemporary art exhibition showcasing emerging artists",
          edition: "Spring 2025",
          daysQty: 6,
          type: "EXHIBITION",
          logoUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&auto=format&fit=crop",
          createdBy: "curator",
          phone: "+34 936 22 03 76",
          websiteUrl: "https://www.museunacional.cat",
          yearEdition: 2025,
          name: "Contemporary Art Show",
          modifiedBy: "curator",
          tags: ["art", "contemporary", "emerging"],
          startDate: "2025-03-20T10:00:00Z",
          eventCode: "CAS2025",
          previewImageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&auto=format&fit=crop",
          gates: ["Main Entry", "Group Access"]
        },
        eventDates: [
          { "day#1": "2025-03-20T10:00:00Z" },
          { "day#2": "2025-03-21T10:00:00Z" },
          { "day#3": "2025-03-22T10:00:00Z" },
          { "day#4": "2025-03-23T10:00:00Z" },
          { "day#5": "2025-03-24T10:00:00Z" },
          { "day#6": "2025-03-25T10:00:00Z" }
        ],
        quotes: {
          "GENERAL": 250,
          "VIP": 50
        },
        status: "Active"
      },
      artists: {
        artists: [
          {
            "headliner": true,
            "genre": "Contemporary",
            "name": "Elena Martínez",
            "id": 1
          },
          {
            "headliner": false,
            "genre": "Mixed Media",
            "name": "Carlos López",
            "id": 2
          },
          {
            "headliner": false,
            "genre": "Sculpture",
            "name": "Ana Torres",
            "id": 3
          }
        ],
        artistsQty: 3
      },
      statistics: {
        statisticsData: {
          openRate: 0.58,
          totalScans: 175,
          attendanceRate: 0.63
        }
      },
      sync: {
        timestamps: {
          core: "2025-02-10T11:20:00Z",
          bundles: "2025-02-10T11:20:00Z",
          artists: "2025-02-10T11:20:00Z",
          statistics: "2025-03-21T15:30:00Z"
        }
      }
    },
    {
      eventId: "EVENT_005",
      core: {
        generalData: {
          country: "Spain",
          venue: "Razzmatazz",
          address: "C/ Pamplona 88, Barcelona",
          city: "Barcelona",
          endDate: "2025-03-19T05:00:00Z",
          postalCode: "08018",
          description: "A night of electronic music with top DJs",
          edition: "Spring 2025",
          daysQty: 1,
          type: "CONCERT",
          logoUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
          createdBy: "promoter",
          phone: "+34 933 20 82 00",
          websiteUrl: "https://www.salarazzmatazz.com",
          yearEdition: 2025,
          name: "Electronic Music Night",
          modifiedBy: "admin",
          tags: ["music", "electronic", "dj"],
          startDate: "2025-03-18T22:00:00Z",
          eventCode: "EMN2025",
          previewImageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop",
          gates: ["Main Entry", "VIP Access"]
        },
        eventDates: [
          { "day#1": "2025-03-18T22:00:00Z" }
        ],
        quotes: {
          "GENERAL": 350,
          "VIP": 50
        },
        status: "Active"
      },
      artists: {
        artists: [
          {
            "headliner": true,
            "genre": "Electronic",
            "name": "Carl Cox",
            "id": 1
          },
          {
            "headliner": false,
            "genre": "Techno",
            "name": "Nina Kraviz",
            "id": 2
          },
          {
            "headliner": false,
            "genre": "House",
            "name": "Boris Brejcha",
            "id": 3
          }
        ],
        artistsQty: 3
      },
      statistics: {
        statisticsData: {
          openRate: 0.81,
          totalScans: 320,
          attendanceRate: 0.82
        }
      },
      sync: {
        timestamps: {
          core: "2025-01-25T16:45:00Z",
          bundles: "2025-01-25T16:45:00Z",
          artists: "2025-01-25T16:45:00Z",
          statistics: "2025-03-19T10:15:00Z"
        }
      }
    },
    {
      eventId: "EVENT_006",
      core: {
        generalData: {
          country: "Spain",
          venue: "MNAC Workshop Space",
          address: "MNAC, Barcelona",
          city: "Barcelona",
          endDate: "2025-05-03T19:00:00Z",
          postalCode: "08038",
          description: "Series of art workshops for aspiring artists",
          edition: "Spring 2025",
          daysQty: 3,
          type: "WORKSHOP",
          logoUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&auto=format&fit=crop",
          createdBy: "admin",
          phone: "+34 936 22 03 76",
          websiteUrl: "https://www.museunacional.cat/workshops",
          yearEdition: 2025,
          name: "Art Workshop Series",
          modifiedBy: "facilitator",
          tags: ["art", "workshop", "education"],
          startDate: "2025-05-01T10:00:00Z",
          eventCode: "AWS2025",
          previewImageUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&auto=format&fit=crop",
          gates: ["Workshop Area Entrance"]
        },
        eventDates: [
          { "day#1": "2025-05-01T10:00:00Z" },
          { "day#2": "2025-05-02T10:00:00Z" },
          { "day#3": "2025-05-03T10:00:00Z" }
        ],
        quotes: {
          "PARTICIPANT": 60,
          "OBSERVER": 15
        },
        status: "Draft"
      },
      artists: {
        artists: [
          {
            "headliner": true,
            "genre": "Mixed Media",
            "name": "Maria Sanchez",
            "id": 1
          },
          {
            "headliner": true,
            "genre": "Digital Art",
            "name": "Joan Miró Foundation",
            "id": 2
          }
        ],
        artistsQty: 2
      },
      statistics: {
        statisticsData: {
          openRate: 0,
          totalScans: 0,
          attendanceRate: 0
        }
      },
      sync: {
        timestamps: {
          core: "2025-03-10T13:25:00Z",
          bundles: "2025-03-10T13:25:00Z",
          artists: "2025-03-10T13:25:00Z",
          statistics: "2025-03-10T13:25:00Z"
        }
      }
    }
  ];