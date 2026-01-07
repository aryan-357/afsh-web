export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface StrapiAttribute<T> {
    id: number;
    attributes: T;
}

export interface NoticeAttributes {
    title: string;
    content: string;
    date: string;
    isNew?: boolean;
    file: {
        data: {
            attributes: {
                url: string;
                name: string;
            };
        } | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export type Notice = StrapiAttribute<NoticeAttributes>;
