interface IPostDetail {
  id?: number;
  created_at?: string;
  created_at_i?: number;
  type?: string;
  author?: string;
  title?: string;
  url?: string;
  text?: string;
  points?: number;
  parent_id?: number;
  story_id?: number;
  children?: IPostDetail[] | [];
  options?: [];
}

interface IHightlightResult {
  value?: string;
  matchLevel?: string;
  matchedWords?: string[];
}

interface IPost {
  created_at?: string;
  title?: string;
  url?: string;
  author?: string;
  points?: number;
  story_text?: string;
  comment_text?: string;
  num_comments?: number;
  story_id?: number;
  story_title?: string;
  story_url?: string;
  parent_id?: number;
  created_at_i?: number;
  _tags?: string[];
  ObjectID?: string;
  _highlightResult?: {
    title?: IHightlightResult;
    url?: IHightlightResult;
    author?: IHightlightResult;
  };
}

interface IPostResult {
  hits?: IPost[];
  nbHits?: number;
  page?: number;
  nbPages?: number;
  hitsPerPage?: number;
  exhaustiveNbHits?: Boolean;
  exhaustiveTypo?: Boolean;
  query?: string;
  params?: string;
  processingTimeMS?: number;
}
