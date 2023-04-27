export interface IUnsplash {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: UnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  sponsorship: string;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: UnsplashTag[];
  tags_preview: TagsPreview[];
  views: number;
  downloads: number;
  related_collections: RelatedCollections;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface UnsplashLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Location {
  name: string;
  city: string;
  country: string;
  position: Position;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface Meta {
  index: boolean;
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface Result {
  id: string;
  title: string;
  description: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: ResultTag[];
  links: ResultLinks;
  user: User;
  cover_photo: ResultCoverPhoto;
  preview_photos: PreviewPhoto[];
}

export interface ResultCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  urls: Urls;
  links: UnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  sponsorship: null;
  user: User;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export interface ResultLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface PreviewPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls;
}

export interface ResultTag {
  type: Type;
  title: string;
  source?: PurpleSource;
}

export interface PurpleSource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: PurpleCoverPhoto;
}

export interface Ancestry {
  type: Category;
  category: Category;
  subcategory?: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface PurpleCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  urls: Urls;
  links: UnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface PurpleTopicSubmissions {
  people?: People;
  'current-events'?: People;
  health?: People;
  athletics?: People;
}

export interface People {
  status: Status;
  approved_on: Date;
}

export enum Status {
  Approved = 'approved',
}

export enum Type {
  LandingPage = 'landing_page',
  Search = 'search',
}

export interface UnsplashTag {
  type: Type;
  title: string;
  source?: FluffySource;
}

export interface FluffySource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: FluffyCoverPhoto;
}

export interface FluffyCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: UnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface FluffyTopicSubmissions {
  people?: People;
  'textures-patterns'?: People;
  wallpapers?: People;
}

export interface TagsPreview {
  type: Type;
  title: string;
  source?: TagsPreviewSource;
}

export interface TagsPreviewSource {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: TentacledCoverPhoto;
}

export interface TentacledCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: Urls;
  links: UnsplashLinks;
  likes: number;
  liked_by_user: boolean;
  sponsorship: null;
  topic_submissions: TentacledTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface TentacledTopicSubmissions {
  people: People;
}
