export interface JobOffer {
    category: String[];
    country: string;
    date: string;
    location: string;
    reference: string;
    region: string;
    title: string;
    url: string;
}

export interface JobsResponse {
    jobs: JobOffer[]
}