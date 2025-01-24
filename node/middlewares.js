// middleware => chain of responsabilities

const step1 = (ctx, next) => {
  ctx.value = "mid1";
  next();
};

const step2 = (ctx, next) => {
  ctx.value2 = "mid2";
  next();
};

const step3 = ctx => (ctx.value3 = "mid3");

const exec = (ctx, ...middleware) => {
  const execStep = index => {
    middleware &&
      index < middleware.length &&
      middleware[index](ctx, () => execStep(index + 1));
  };
  execStep(0);
};

const ctx = {};
exec(ctx, step1, step2, step3);
console.log("ctx :>> ", ctx);
