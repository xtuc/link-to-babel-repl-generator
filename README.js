const { generate, encodeArray } = require("./index");

/**
 * Default
 */
{
  const code = 'console.log("test");';
  const url = generate(code);

  console.log(url);
}

/**
 * auto evaluate
 */
{
  const code = 'console.log("test");';
  const url = generate(code, { evaluate: true });

  console.log(url);
}

/**
 * specify presets
 */
{
  const presets = encodeArray([
    "react"
  ]);

  const code = '<div>test</div>';
  const url = generate(code, { presets });

  console.log(url);
}
