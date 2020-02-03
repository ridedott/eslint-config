/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-expressions */
foo && foo.a && foo.a.b && foo.a.b.c;
foo && foo.a && foo.a.b && foo.a.b.c;
foo && foo.a && foo.a.b && foo.a.b.method && foo.a.b.method();


foo &&
  foo.a != null &&
  foo.a.b !== null &&
  foo.a.b.c != undefined &&
  foo.a.b.c.d !== undefined &&
  foo.a.b.c.d.e;
