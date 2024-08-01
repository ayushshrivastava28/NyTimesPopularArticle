export interface MediaMetadata {
    url: string;
    format: string;
    height: number;
    width: number;
}

export interface Media {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    "media-metadata": MediaMetadata[];
}

export interface Article {
    id: number;
    title: string;
    abstract: string;
    url: string;
    media: Media[];
    byline: string;
    published_date: string;
    source: string;
}