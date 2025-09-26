routerAdd("GET", "/hello", (e) => {
  return e.json(200, { message: "Hello world" });
});

