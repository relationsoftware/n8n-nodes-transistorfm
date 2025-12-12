import type { INodeProperties } from 'n8n-workflow';

const showOnlyForShowsGetAll = {
    resource: ['shows'],
    operation: ['getAll'],
};

export const showsGetAllDescription: INodeProperties[] = [
    {
        displayName: 'Returns all shows for the authenticated account.',
        name: 'notice',
        type: 'notice',
        displayOptions: { show: showOnlyForShowsGetAll },
        default: '',
    },
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        displayOptions: { show: showOnlyForShowsGetAll },
        default: 1,
        description: 'Pagination page number',
        typeOptions: {
            minValue: 1,
        },
    },
    {
        displayName: 'Per Page',
        name: 'perPage',
        type: 'number',
        displayOptions: { show: showOnlyForShowsGetAll },
        default: 25,
        description: 'Number of items per page',
        typeOptions: {
            minValue: 1,
            maxValue: 100,
        },
    },
];