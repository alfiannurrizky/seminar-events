import swaggerJSDoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation with Swagger',
            termOfService: 'http://example.com/terms/',
            contact: {
                name: 'API support',
                url: 'http://www.example.com/support',
                email: 'support@example.com'
            },
            license: {
                name: 'Apache 2.0',
                url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
            }
        },
        server: [
            {
                url: '/api/v1',
                description: 'Server Development'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            },
            responses: {
                '200': {
                    description: 'OK',
                    content: {
                        'application/json': {}
                    }
                },
                '400': {
                    description: 'Bad Request'
                },
                '401': {
                    description: 'Unauthorized'
                },
                '403': {
                    descriptipn: 'Forbidden'
                },
                '422': {
                    description: 'Unprocessable entity'
                }
            }
        }
    },
    apis: ['./docs/*.yaml']
}

export const specs = swaggerJSDoc(options)
