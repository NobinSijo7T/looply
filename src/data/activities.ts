import type { Activity } from '../types';

export const ACTIVITIES: Activity[] = [
  {
    id: 'sunset-nature-walk',
    title: 'Sunset Nature Walk',
    category: 'Walk',
    description: 'Take a break with an easy outdoor adventure.',
    longDescription:
      'A calming scenic path through pine groves and elevated ridges. Perfect for catching the golden hour light, stepping away from screens, and discovering hidden valley viewpoints.',
    duration: '~1.5 hrs',
    vibe: 'Easy trail · Scenic vistas',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'linear-gradient(135deg, #F97316 0%, #EAB308 50%, #3B82F6 100%)',
    locationHint: 'West Ridge Trailhead'
  },
  {
    id: 'local-food-trail',
    title: 'Local Food Trail',
    category: 'Food',
    description: 'Discover new flavours and interesting food experiences.',
    longDescription:
      'Wander through tucked-away bakeries, family spice merchants, and neighbourhood roasteries. Sample fresh bites and discover stories behind community culinary spots.',
    duration: '~2 hrs',
    vibe: '4 tasting stops · Walkable route',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'linear-gradient(135deg, #EF4444 0%, #F59E0B 100%)',
    locationHint: 'Old Market Quarter'
  },
  {
    id: 'weekend-art-workshop',
    title: 'Weekend Art Workshop',
    category: 'Art',
    description: 'Make time for creativity and try something new.',
    longDescription:
      'Spend a tactile afternoon exploring open studio ceramics, linocut printmaking, or mixed-media canvas. All materials provided with friendly guidance for all skill levels.',
    duration: '~2.5 hrs',
    vibe: 'Hands-on · Beginners welcome',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    locationHint: 'Riverside Studio Collective'
  }
];
