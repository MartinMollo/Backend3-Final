import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Adopt Me API',
            version: '1.0.0',
            description: 'documentación del módulo Users del proyecto API AdoptMe',
        },
        servers:[
			{
				url: `http://localhost:8080`
			}
		],
    },
    apis: ['./src/routes/users.router.js'],
};

const swaggerSpec = swaggerJsDoc(options);

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
