import type { INodeProperties } from 'n8n-workflow';
import { showsGetAllDescription } from './getAll';
import { showsGetDescription } from './get';
import { showsUpdateDescription } from './update';

const showOnlyForShows = {
    resource: ['shows'],
};

export const showsDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForShows,
        },
        options: [
            {
                name: 'Get All',
                value: 'getAll',
                action: 'Get shows',
                description: 'Get all shows',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/shows',
                        qs: {
                            'pagination[page]': '={{$parameter.page}}',
                            'pagination[per]': '={{$parameter.perPage}}',
                        },
                    },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a show',
                description: 'Get a single show',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/shows/{{$parameter.showId}}',
                    },
                },
            },
            {
                name: 'Update',
                value: 'update',
                action: 'Update a show',
                description: 'Update a show',
                routing: {
                    request: {
                        method: 'PATCH',
                        url: '=/shows/{{$parameter.showId}}',
                        headers: {
                            // Transistor accepts JSON bodies (and also form-encoded), so we send JSON safely.
                            'Content-Type': 'application/json',
                            Accept: 'application/vnd.api+json',
                        },
                        body: '={{(() => { const f = $parameter.updateFields || {}; const show = {}; if (f.title) show.title = f.title; if (f.author) show.author = f.author; if (f.description) show.description = f.description; if (f.website) show.website = f.website; if (f.keywords) show.keywords = f.keywords; if (typeof f.explicit === "boolean") show.explicit = f.explicit; if (f.language) show.language = f.language; if (f.category) show.category = f.category; if (f.secondaryCategory) show.secondary_category = f.secondaryCategory; if (f.timeZone) show.time_zone = f.timeZone; if (f.showType) show.show_type = f.showType; return { show }; })()}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    ...showsGetAllDescription,
    ...showsGetDescription,
    ...showsUpdateDescription,
];