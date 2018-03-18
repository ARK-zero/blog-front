/**
 * Created by aman on 3/16/2018.
 */
export const TinymceConfig = {
  theme: 'modern',
  skin_url: '/assets/tinymce/skins/lightgray',
  codesample_content_css: '/assets/prism/prism.css',

  statusbar: false,
  autoresize_min_height: 500,
  // language_url: '/assets/tinymce/langs/zh_CN.js',

  plugins: 'advlist anchor autolink autoresize charmap code codesample ' +
  'colorpicker directionality fullscreen hr image imagetools ' +
  'insertdatetime link lists media noneditable pagebreak ' +
  'paste table textcolor textpattern visualchars wordcount',

  wordcount_cleanregex: /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g,
  wordcount_countregex: /[\w\u2019\x27\-\u00C0-\u1FFF]+/g,

  codesample_languages: [
    {text: 'HTML/XML', value: 'markup'},
    {text: 'JavaScript', value: 'javascript'},
    {text: 'Java', value: 'java'},
    {text: 'JSON', value: 'json'},
    {text: 'Less', value: 'less'},
    {text: 'Sass', value: 'sass'},
    {text: 'CSS', value: 'css'},
    {text: 'C++', value: 'cpp'},
    {text: 'C#', value: 'ccsharp'},
    {text: 'C', value: 'c'}
  ],
};
