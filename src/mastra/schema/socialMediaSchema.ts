import { z } from 'zod';

export const socialMediaResearchSchema = z
  .object({
    companyName: z.string(),
    companyPosts: z.array(
      z.object({
        platform: z.string(),
        content: z.string(),
        date: z.string(),
        engagement: z.object({
          likes: z.number(),
          shares: z.number(),
          comments: z.number(),
        }),
        type: z.string(),
      })
    ),
    ceoActivity: z.array(
      z.object({
        platform: z.string(),
        content: z.string(),
        date: z.string(),
        engagement: z.object({
          likes: z.number(),
          shares: z.number(),
          comments: z.number(),
        }),
        topic: z.string(),
      })
    ),
    engagement: z.object({
      totalFollowers: z.number(),
      averageLikes: z.number(),
      engagementRate: z.string(),
      growthRate: z.string(),
    }),
    platforms: z.array(
      z.object({
        name: z.string(),
        followers: z.number(),
        verified: z.boolean(),
        activity: z.string(),
      })
    ),
    followers: z.object({
      total: z.number(),
      demographics: z.object({
        primaryAgeGroup: z.string(),
        primaryLocation: z.string(),
        interests: z.array(z.string()),
      }),
    }),
    recentCampaigns: z.array(
      z.object({
        name: z.string(),
        platform: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        reach: z.number(),
        outcome: z.string(),
      })
    ),
    xComData: z
      .object({
        handle: z.string(),
        followers: z.number(),
        verified: z.boolean(),
        recentTweets: z.array(
          z.object({
            content: z.string(),
            date: z.string(),
            engagement: z.object({
              likes: z.number(),
              retweets: z.number(),
              replies: z.number(),
            }),
            topic: z.string(),
          })
        ),
        trendingTopics: z.array(z.string()),
        brandMentions: z.number(),
      })
      .optional(),
    instagramData: z
      .object({
        handle: z.string(),
        followers: z.number(),
        verified: z.boolean(),
        recentPosts: z.array(
          z.object({
            content: z.string(),
            date: z.string(),
            engagement: z.object({
              likes: z.number(),
              comments: z.number(),
              shares: z.number(),
            }),
            type: z.string(),
          })
        ),
        stories: z.array(
          z.object({
            content: z.string(),
            date: z.string(),
            views: z.number(),
          })
        ),
        hashtags: z.array(z.string()),
      })
      .optional(),
    youtubeData: z
      .object({
        channelName: z.string(),
        subscribers: z.number(),
        verified: z.boolean(),
        recentVideos: z.array(
          z.object({
            title: z.string(),
            date: z.string(),
            views: z.number(),
            engagement: z.object({
              likes: z.number(),
              comments: z.number(),
              shares: z.number(),
            }),
            duration: z.string(),
            topic: z.string(),
          })
        ),
        totalViews: z.number(),
        uploadFrequency: z.string(),
      })
      .optional(),
    dataSource: z.string().optional(),
    lastUpdated: z.string().optional(),
    profileCount: z.number().optional(),
  })
  .partial();
