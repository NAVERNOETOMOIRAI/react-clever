import postcssNested from 'postcss-nested';
import postCssCustomProperties from 'postcss-custom-properties';
import postCssCustomMedia from 'postcss-custom-media';
import postCssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano'; 

const basePlugins = [
  postcssNested(),
  postCssCustomProperties(),
  postCssCustomMedia(),
  postCssPresetEnv(),
  cssnano(),
];

const postcssConfig = {
  syntax: 'postcss-scss',
  plugins: basePlugins,
};

export default postcssConfig;