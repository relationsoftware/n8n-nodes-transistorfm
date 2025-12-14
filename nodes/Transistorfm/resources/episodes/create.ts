import type {INodeProperties} from 'n8n-workflow';

const showOnlyForEpisodesCreate = {
    resource: ['episodes'],
    operation: ['create'],
};

export const episodesCreateDescription: INodeProperties[] = [
    {
        displayName:
            'Create a new draft episode for a show (POST /v1/episodes). Only the fields you set will be sent.',
        name: 'notice',
        type: 'notice',
        displayOptions: {show: showOnlyForEpisodesCreate},
        default: '',
    },
    {
        displayName: 'Show ID or Slug',
        name: 'showId',
        type: 'string',
        displayOptions: {show: showOnlyForEpisodesCreate},
        default: '',
        required: true,
        description: 'ID or slug of the show to add the episode to',
    },
    {
        displayName: 'Episode Fields',
        name: 'episodeFields',
        type: 'collection',
        displayOptions: {show: showOnlyForEpisodesCreate},
        default: {},
        placeholder: 'Add field',
        options: [
            {
                displayName: 'Alternate URL',
                name: 'alternateUrl',
                type: 'string',
                default: '',
                description: 'Overrides share_url',
            },
            {
                displayName: 'Audio URL',
                name: 'audioUrl',
                type: 'string',
                default: '',
                description: 'Public audio URL (or audio_url from authorize_upload)',
            },
            {displayName: 'Author', name: 'author', type: 'string', default: ''},
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
                description: 'Longer description (may contain HTML)',
            },
            {
                displayName: 'Email Notifications Override',
                name: 'emailNotifications',
                type: 'boolean',
                default: false,
                description: 'Whether to override the show default for private podcast emails',
            },
            {displayName: 'Explicit', name: 'explicit', type: 'boolean', default: false},
            {
                displayName: 'Image URL',
                name: 'imageUrl',
                type: 'string',
                default: '',
                description: 'Episode artwork URL',
            },
            {
                displayName: 'Keywords',
                name: 'keywords',
                type: 'string',
                default: '',
                description: 'Comma-separated keywords',
            },
            {
                displayName: 'Number',
                name: 'number',
                type: 'number',
                default: 1,
                typeOptions: {minValue: 0},
                description: 'Episode number',
            },
            {
                displayName: 'Season',
                name: 'season',
                type: 'number',
                default: 1,
                typeOptions: {minValue: 0},
            },
            {
                displayName: 'Summary',
                name: 'summary',
                type: 'string',
                default: '',
                description: 'Short summary',
            },
            {displayName: 'Title', name: 'title', type: 'string', default: ''},
            {
                displayName: 'Transcript Text',
                name: 'transcriptText',
                type: 'string',
                default: '',
                description: 'Full transcript text',
            },
            {
                displayName: 'Type',
                name: 'type',
                type: 'options',
                default: 'full',
                options: [
                    {name: 'Full', value: 'full'},
                    {name: 'Trailer', value: 'trailer'},
                    {name: 'Bonus', value: 'bonus'},
                ],
            },
            {
                displayName: 'Video URL',
                name: 'videoUrl',
                type: 'string',
                default: '',
                description: 'YouTube video URL',
            },
        ],
    },
];
