-- Run this in Supabase SQL Editor (safe to run multiple times)

-- ─── CREATE gallery_categories TABLE IF MISSING ──────────────────────────────
create table if not exists gallery_categories (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  images text[] default '{}',
  order_index integer default 0
);
alter table gallery_categories enable row level security;
do $$ begin
  create policy "Public read gallery_categories" on gallery_categories for select using (true);
exception when duplicate_object then null; end $$;
do $$ begin
  create policy "Auth write gallery_categories" on gallery_categories for all using (auth.role() = 'authenticated');
exception when duplicate_object then null; end $$;

-- ─── COTTAGES ───────────────────────────────────────────────────────────────
truncate table cottages restart identity cascade;
insert into cottages (name, type, images, order_index) values
  ('Parijatha', 'Signature Cottage', array[
    '/rooms/vruksha-parijatha/vruksha-parijatha-1.webp',
    '/rooms/vruksha-parijatha/vruksha-parijatha-2.webp',
    '/rooms/vruksha-parijatha/vruksha-parijatha-3.webp'
  ], 0),
  ('Prakruthi', 'Heritage Stay', array[
    '/rooms/vruksha-prakruthi/vruksha-prakruthi-1.webp',
    '/rooms/vruksha-prakruthi/vruksha-prakruthi-2.webp',
    '/rooms/vruksha-prakruthi/vruksha-prakruthi-3.webp',
    '/rooms/vruksha-prakruthi/vruksha-prakruthi-4.webp',
    '/rooms/vruksha-prakruthi/vruksha-prakruthi-5.webp'
  ], 1),
  ('Myst Wood', 'Forest Retreat', array[
    '/rooms/vruksha-mystwood/vruksha-mystwood-1.webp',
    '/rooms/vruksha-mystwood/vruksha-mystwood-2.webp',
    '/rooms/vruksha-mystwood/vruksha-mystwood-3.webp'
  ], 2),
  ('Kadamba', 'Nature Immersion', array[
    '/rooms/vruksha-kadamba/vruksha-kadamba-1.webp',
    '/rooms/vruksha-kadamba/vruksha-kadamba-2.webp'
  ], 3),
  ('Mouna', 'Quiet Sanctuary', array[
    '/rooms/vruksha-mouna/vruksha-mouna-1.webp',
    '/rooms/vruksha-mouna/vruksha-mouna-2.webp',
    '/rooms/vruksha-mouna/vruksha-mouna-3.webp'
  ], 4),
  ('Dormitory', 'Group Getaway', array[
    '/rooms/vruksha-dormitory/vruksha-dormitory-1.webp',
    '/rooms/vruksha-dormitory/vruksha-dormitory-2.webp'
  ], 5);

-- ─── AMENITIES ──────────────────────────────────────────────────────────────
truncate table amenities restart identity cascade;
insert into amenities (icon, title, description, order_index) values
  ('Wind',   'Pure Serenity',  'Zero noise pollution. Only the sound of the wild.',  0),
  ('Waves',  'Soormane Falls', 'Just 800m away. Experience the roar of nature.',     1),
  ('Map',    'Guided Trek',    'Explore the hidden trails of the Western Ghats.',    2),
  ('Trees',  'Estate Walk',    'Guided tours through our lush coffee plantations.',  3),
  ('Coffee', 'Malnad Cuisine', 'Authentic local flavors served fresh daily.',        4),
  ('Flame',  'Campfire',       'Warm evenings under the starlit Kalasa sky.',        5);

-- ─── TESTIMONIALS ───────────────────────────────────────────────────────────
truncate table testimonials restart identity cascade;
insert into testimonials (author, role, content, order_index) values
  ('Arjun Mehta',  'Tech Lead, Bangalore', 'The silence here is profound. Watching the mist roll over the Kalasa peaks from our A-frame was the reset I didn''t know I needed.', 0),
  ('Priya Rao',    'Nature Photographer',  'A rare find. The proximity to Soormane Falls combined with the luxury of the wood house makes this the finest stay in Malnad.',        1),
  ('Vikram Singh', 'Entrepreneur',         'Finally, a place that understands the luxury of space. We spent hours just pausing and listening to the estate sounds.',              2),
  ('Sneha Kapoor', 'Food Blogger',         'The Malnad cuisine was exceptional. Waking up to the smell of fresh coffee and damp earth is a memory I will cherish forever.',       3),
  ('Rahul Nair',   'Architect',            'Perfect for families. The kids loved the estate walk, and we loved the absolute privacy of the Plantation Villa.',                    4),
  ('Ananya Desai', 'Travel Writer',        'I have traveled across the Western Ghats, but the hospitality at Vruksha Valley is in a league of its own.',                         5);

-- ─── FAQs ───────────────────────────────────────────────────────────────────
truncate table faqs restart identity cascade;
insert into faqs (question, answer, order_index) values
  ('What is the best resort near Horanadu Temple?',
   'Vruksha Valley is one of the closest luxury resorts to Horanadu Annapoorneshwari Temple, located just 15km away. Vruksha Valley in Kalasa, Karnataka is the perfect base for pilgrims.',
   0),
  ('How far is Vruksha Valley from Soormane Falls?',
   'Soormane Falls is just 800 metres from Vruksha Valley — a short walk through the Vruksha Valley coffee estate.',
   1),
  ('Is Vruksha Valley good for the Netravati Peak trek?',
   'Yes. Vruksha Valley serves as the ideal basecamp for Netravati Peak. Vruksha Valley helps arrange permits and experienced local guides for the trek.',
   2),
  ('What type of cottages are available at Vruksha Valley?',
   'Vruksha Valley offers 6 stay options — Parijatha, Prakruthi, Myst Wood, Kadamba, Mouna, and a Dormitory for groups. Each cottage at Vruksha Valley is designed to blend into the natural surroundings.',
   3),
  ('What is the best time to visit Vruksha Valley, Kalasa?',
   'The best time to visit Vruksha Valley is October to February for clear skies and trekking. June to September brings lush monsoon greenery around Vruksha Valley.',
   4),
  ('How do I book a stay at Vruksha Valley?',
   'You can book Vruksha Valley directly by calling or WhatsApp on +91 82177 64481. Vruksha Valley accepts direct bookings with no third-party fees.',
   5),
  ('Is Vruksha Valley suitable for families and couples?',
   'Yes. Vruksha Valley welcomes families, couples, pilgrims visiting Horanadu, and adventure groups. Vruksha Valley has cottages suited for every type of guest.',
   6),
  ('What activities are available at Vruksha Valley?',
   'At Vruksha Valley, guests enjoy Soormane Falls walks, Kyatanamakki Jeep safari, Netravati Peak trekking, Horanadu Temple visits, coffee estate tours, and the Vruksha Valley swimming pool.',
   7),
  ('What is the check-in and check-out time at Vruksha Valley?',
   'At Vruksha Valley, check-in is at 12:00 PM and check-out is at 11:00 AM.',
   8),
  ('Is food available at Vruksha Valley?',
   'Yes. Vruksha Valley serves authentic Malnad and South Indian cuisine, prepared farm-to-table using local produce from the Vruksha Valley estate.',
   9);

-- ─── BLOG POSTS ─────────────────────────────────────────────────────────────
insert into blog_posts (slug, title, subtitle, category, image, published) values
  ('soormane-falls-guide',
   'The Soormane Falls Experience',
   'Discover the hidden waterfall located just 800m from Vruksha Valley.',
   'Nature',
   '/gallery/vruksha-pool/vruksha-pool-1.webp',
   true),
  ('kalasa-trekking-guide',
   'Trekking Netravati Peak',
   'A complete guide to witnessing the legendary sea of clouds.',
   'Adventure',
   'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070',
   true),
  ('malnad-itinerary',
   'The Ultimate 2-Day Itinerary',
   'Experience the best of Kalasa, from ancient temples to sunset hills.',
   'Travel',
   'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071',
   true)
on conflict (slug) do update set
  title = excluded.title,
  subtitle = excluded.subtitle,
  category = excluded.category,
  image = excluded.image,
  published = excluded.published;

-- ─── SITE SETTINGS (upsert — safe if keys already exist) ────────────────────
insert into site_settings (key, value) values
  ('hero_image',        '/hero.webp'),
  ('hero_tagline',      'Luxury Nature Resort | Kalasa, Chikmagalur'),
  ('hero_heading',      'A place to pause and remember what matters the most.'),
  ('about_label',       'Our Story'),
  ('about_heading',     'A Sanctuary in the Heart of Nature.'),
  ('about_paragraph_1', 'Vruksha Valley was born from a simple desire: to create a space where the modern world fades away and the rhythm of the Western Ghats takes over.'),
  ('about_paragraph_2', 'Located in the misty heights of Kalasa, our resort is more than a destination; it is a tribute to the ancient coffee estates and the quiet dignity of the mountains.'),
  ('contact_phone_1',   '+91 82177 64481'),
  ('contact_phone_2',   '+91 63643 64481'),
  ('contact_whatsapp',  '918217764481'),
  ('contact_email',     'vrukshavalley@gmail.com'),
  ('contact_address',   'Soormane Falls Road, Guddemakki, Kalasa, Karnataka - 577124'),
  ('contact_hours',     '8:00 AM — 10:00 PM IST'),
  ('social_instagram',  'https://www.instagram.com/vrukshavalley/'),
  ('social_youtube',    'https://youtube.com/@vrukshavalley'),
  ('social_facebook',   'https://facebook.com'),
  ('footer_tagline',    'A place to pause and remember what matters the most.'),
  ('about_page_hero_img',        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070'),
  ('about_page_hero_h1',         'Our Story'),
  ('about_page_rooted_label',    'Rooted in Nature'),
  ('about_page_section_heading', 'Where the misty mountains of Kalasa meet the warmth of Malnad hospitality.'),
  ('about_page_p1',              'Vruksha Valley was established with a singular vision: to preserve the quiet dignity of the Western Ghats while offering a sanctuary for those seeking a pause from the modern world.'),
  ('about_page_p2',              'Our estate is more than just a resort; it is a working coffee plantation where every trail, every tree, and every sunrise tells the story of our family''s deep connection to this land.'),
  ('about_page_side_img',        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071'),
  ('about_page_sustain_h',       'Sustainable Luxury.'),
  ('about_page_sustain_desc',    'We believe in "Low Impact, High Experience." From our signature A-Frame cottages designed to blend into the canopy to our farm-to-table dining, every detail at Vruksha Valley is crafted to honor the environment.'),
  ('about_page_bullet_1',        '800m from the majestic Soormane Falls.'),
  ('about_page_bullet_2',        'Gateway to Netravati Peak, Maidadi, Horanadu Annapoorneshwari Temple, Kudremukh & Kyatanamakki.'),
  ('about_page_bullet_3',        'Authentic Malnad Cuisine & Coffee Estate tours.'),
  ('about_page_cta_h',           'Experience the Silence.'),
  ('about_page_cta_sub',         'Your journey into the heart of the Western Ghats begins here.')
on conflict (key) do update set value = excluded.value, updated_at = now();

-- ─── GALLERY CATEGORIES ─────────────────────────────────────────────────────
truncate table gallery_categories restart identity cascade;
insert into gallery_categories (title, images, order_index) values
  ('Parijatha', array[
    '/gallery/vruksha-parijatha/vruksha-parijatha-1.webp',
    '/gallery/vruksha-parijatha/vruksha-parijatha-2.webp',
    '/gallery/vruksha-parijatha/vruksha-parijatha-3.webp'
  ], 0),
  ('Prakruthi', array[
    '/gallery/vruksha-prakruthi/vruksha-prakruthi-1.webp',
    '/gallery/vruksha-prakruthi/vruksha-prakruthi-2.webp',
    '/gallery/vruksha-prakruthi/vruksha-prakruthi-3.webp',
    '/gallery/vruksha-prakruthi/vruksha-prakruthi-4.webp',
    '/gallery/vruksha-prakruthi/vruksha-prakruthi-5.webp',
    '/gallery/vruksha-prakruthi/vruksha-prakruthi-6.webp'
  ], 1),
  ('Myst Wood', array[
    '/gallery/vruksha-mystwood/vruksha-mystwood-1.webp',
    '/gallery/vruksha-mystwood/vruksha-mystwood-2.webp',
    '/gallery/vruksha-mystwood/vruksha-mystwood-3.webp',
    '/gallery/vruksha-mystwood/vruksha-mystwood-4.webp'
  ], 2),
  ('Kadamba', array[
    '/gallery/vruksha-kadamba/vruksha-kadamba-1.webp',
    '/gallery/vruksha-kadamba/vruksha-kadamba-2.webp'
  ], 3),
  ('Mouna', array[
    '/gallery/vruksha-mouna/vruksha-mouna-1.webp',
    '/gallery/vruksha-mouna/vruksha-mouna-2.webp',
    '/gallery/vruksha-mouna/vruksha-mouna-3.webp',
    '/gallery/vruksha-mouna/vruksha-mouna-4.webp'
  ], 4),
  ('Dormitory', array[
    '/gallery/vruksha-dormitory/vruksha-dormitory-1.webp',
    '/gallery/vruksha-dormitory/vruksha-dormitory-2.webp',
    '/gallery/vruksha-dormitory/vruksha-dormitory-3.webp'
  ], 5),
  ('Swimming Pool', array[
    '/gallery/vruksha-pool/vruksha-pool-1.webp',
    '/gallery/vruksha-pool/vruksha-pool-2.webp',
    '/gallery/vruksha-pool/vruksha-pool-3.webp'
  ], 6),
  ('Dining Space', array[
    '/gallery/vruksha-diningspace/vruksha-diningspace-1.webp',
    '/gallery/vruksha-diningspace/vruksha-diningspace-2.webp',
    '/gallery/vruksha-diningspace/vruksha-diningspace-3.webp'
  ], 7),
  ('Indoor Games', array[
    'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070',
    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070'
  ], 8);

-- ─── PAGE METADATA (upsert — safe if pages already exist) ───────────────────
insert into page_metadata (page, title, description, keywords) values
  ('home',
   'Vruksha Valley | Best Luxury Resort in Kalasa, Chikmagalur',
   'Vruksha Valley is a luxury nature resort in Kalasa, Chikmagalur — 800m from Soormane Falls, 15km from Horanadu Temple. Coffee estate cottages, swimming pool, Malnad cuisine.',
   array['Vruksha Valley','best resort in Kalasa','luxury resort Kalasa Chikmagalur','resort near Horanadu Temple','resort near Soormane Falls','Kalasa resort booking','nature resort Chikmagalur','coffee estate resort Karnataka','Western Ghats luxury stay','Parijatha cottage Kalasa','Prakruthi heritage stay','Myst Wood forest retreat','Kadamba cottage Kalasa','Mouna sanctuary Vruksha Valley','group stay Kalasa','swimming pool resort Chikmagalur','Malnad cuisine resort','farm to table Kalasa','Netravati peak basecamp','Kyatanamakki jeep safari resort','Soormane Falls walk','Horanadu pilgrimage stay','eco resort Western Ghats','cottage stay Kalasa Karnataka','resort in Kalasa','Chikmagalur luxury stay','coffee estate homestay Kalasa']
  ),
  ('about',
   'About Us | Vruksha Valley Eco Resort Kalasa, Chikmagalur',
   'Learn the story behind Vruksha Valley — a sustainable luxury resort on a working coffee estate in Kalasa, Chikmagalur. Gateway to Soormane Falls, Horanadu Temple & Netravati Peak.',
   array['about Vruksha Valley','eco resort Kalasa','sustainable resort Chikmagalur','coffee estate stay Karnataka','Western Ghats resort story']
  ),
  ('contact',
   'Contact Vruksha Valley | Book Your Stay in Kalasa',
   'Get in touch with Vruksha Valley resort in Kalasa, Karnataka. Call or WhatsApp +91 82177 64481 to book your stay.',
   array['contact Vruksha Valley','book resort Kalasa','Vruksha Valley phone number','resort booking Chikmagalur']
  ),
  ('gallery',
   'Gallery | Vruksha Valley Resort Kalasa, Chikmagalur',
   'Explore photos of cottages, the swimming pool, dining, and the lush surroundings at Vruksha Valley resort in Kalasa.',
   array['Vruksha Valley gallery','resort photos Kalasa','cottage images Chikmagalur','swimming pool resort Karnataka']
  ),
  ('blog',
   'Journal | Vruksha Valley Resort Blog',
   'Read travel guides, trekking tips, and stories from Vruksha Valley — the luxury nature resort in Kalasa, Chikmagalur.',
   array['Vruksha Valley blog','Kalasa travel guide','Soormane Falls guide','Netravati Peak trek guide','Malnad travel tips']
  )
on conflict (page) do update set
  title = excluded.title,
  description = excluded.description,
  keywords = excluded.keywords;
