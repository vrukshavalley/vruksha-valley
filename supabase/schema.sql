-- Run this entire file in your Supabase SQL Editor

-- Blog Posts
create table if not exists blog_posts (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  subtitle text,
  category text default 'Travel',
  image text,
  content text[] default '{}',
  seo_title text,
  seo_description text,
  seo_keywords text[] default '{}',
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- FAQs
create table if not exists faqs (
  id uuid default gen_random_uuid() primary key,
  question text not null,
  answer text not null,
  order_index integer default 0,
  created_at timestamptz default now()
);

-- Page Metadata
create table if not exists page_metadata (
  id uuid default gen_random_uuid() primary key,
  page text unique not null,
  title text,
  description text,
  keywords text[] default '{}'
);

-- Site Settings (key-value for hero, about, contact content)
create table if not exists site_settings (
  id uuid default gen_random_uuid() primary key,
  key text unique not null,
  value text,
  updated_at timestamptz default now()
);

-- Cottages
create table if not exists cottages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  type text,
  images text[] default '{}',
  order_index integer default 0
);

-- Testimonials
create table if not exists testimonials (
  id uuid default gen_random_uuid() primary key,
  author text not null,
  role text,
  content text not null,
  order_index integer default 0
);

-- Amenities
create table if not exists amenities (
  id uuid default gen_random_uuid() primary key,
  icon text not null,
  title text not null,
  description text not null,
  order_index integer default 0
);

-- RLS: Public can read everything
alter table blog_posts enable row level security;
alter table faqs enable row level security;
alter table page_metadata enable row level security;
alter table site_settings enable row level security;
alter table cottages enable row level security;
alter table testimonials enable row level security;
alter table amenities enable row level security;

create policy "Public read blog_posts" on blog_posts for select using (true);
create policy "Auth write blog_posts" on blog_posts for all using (auth.role() = 'authenticated');

create policy "Public read faqs" on faqs for select using (true);
create policy "Auth write faqs" on faqs for all using (auth.role() = 'authenticated');

create policy "Public read page_metadata" on page_metadata for select using (true);
create policy "Auth write page_metadata" on page_metadata for all using (auth.role() = 'authenticated');

create policy "Public read site_settings" on site_settings for select using (true);
create policy "Auth write site_settings" on site_settings for all using (auth.role() = 'authenticated');

create policy "Public read cottages" on cottages for select using (true);
create policy "Auth write cottages" on cottages for all using (auth.role() = 'authenticated');

create policy "Public read testimonials" on testimonials for select using (true);
create policy "Auth write testimonials" on testimonials for all using (auth.role() = 'authenticated');

create policy "Public read amenities" on amenities for select using (true);
create policy "Auth write amenities" on amenities for all using (auth.role() = 'authenticated');
