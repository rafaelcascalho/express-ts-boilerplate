// import { Tags } from 'opentracing';
// import jaeger from 'jaeger-client';
// import { Request } from 'express';
// import { logger } from './logger';

// const config = {
//   serviceName: process.env.SERVICE_NAME,
//   reporter: {
//     collectorEndpoint: `${process.env.JAEGER_URL}/api/traces`,
//     logSpans: true,
//   },
//   sampler: {
//     type: 'const',
//     param: 1,
//   },
// };
// const options = {
//   tags: {
//     [`${process.env.JAEGER_URL}.version`]: '0.0.1',
//   },
//   logger: logger,
// };

// const tracer = jaeger.initTracer(config, options);

// const span = (req: Request, statusCode, message: string, error = false) => {
//   const span = tracer.start// span(req.path);
//   span.addTags({
//     [Tags.SPAN_KIND]: Tags.SPAN_KIND_MESSAGING_PRODUCER,
//     [Tags.HTTP_METHOD]: req.method,
//     [Tags.HTTP_URL]: req.path,
//     [Tags.HTTP_STATUS_CODE]: statusCode,
//   });
//   if (error) span.setTag(Tags.ERROR, true).log({ error: message });
//   else span.log({ message: message });
//   span.finish();
// };

// export { tracer, span };
