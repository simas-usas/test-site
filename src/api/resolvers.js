export default {
  Query: {
    mainParagraph: () => [
      { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum tempus felis ut scelerisque. Sed dignissim ligula in ipsum euismod, in pulvinar arcu semper. Vestibulum at aliquam augue, vitae imperdiet quam. Mauris porta odio aliquam metus imperdiet ultrices. Praesent nec sem et eros interdum dignissim eu non felis. Vivamus sed pharetra nisi. Curabitur eu lacus non lorem porta facilisis. Vivamus vitae augue id enim tristique aliquam vel nec nulla.' },
      { id: 2, text: 'Suspendisse eu orci elit. In id commodo mauris. Fusce nec imperdiet nibh. Integer a erat scelerisque, pellentesque leo a, posuere justo. Etiam maximus, nibh a luctus sagittis, nibh elit tempus est, non dapibus nunc lacus tincidunt dolor. Integer porta turpis molestie arcu euismod, id elementum tellus sodales. Sed suscipit molestie orci, semper dictum odio tempor at. Proin vel pellentesque ante, nec interdum ante. Mauris justo lacus, tincidunt sed sapien nec, tempus egestas neque. Mauris mattis, felis sagittis volutpat tincidunt, lacus augue efficitur mi, vitae iaculis lorem turpis in enim. Donec tristique dignissim massa, id dignissim tellus sodales nec. Ut molestie neque eu arcu ultrices rhoncus. Suspendisse potenti.' },
      { id: 3, text: 'Quisque a justo efficitur, sagittis felis at, maximus lacus. Sed id tempor mauris. Suspendisse eget ipsum nibh. Nam ornare sodales mi quis ornare. Ut at accumsan felis. Nulla facilisi. Praesent at ligula commodo neque varius tempus sit amet et ligula. Phasellus elementum sem ante, vel cursus sapien pulvinar sed. Nulla dui eros, vehicula non ipsum in, suscipit accumsan eros.' },
      { id: 4, text: 'Sed arcu purus, hendrerit sed rutrum vel, faucibus sed lectus. Cras consectetur dolor et risus commodo tempus. Nullam porta eros eros, sit amet consectetur justo varius vel. Aenean gravida rutrum tellus, non hendrerit justo venenatis at. Vivamus faucibus at lacus rhoncus maximus. Duis pretium placerat placerat.' },
    ],
    formText: () => 'Quisque a justo efficitur, sagittis felis at, maximus lacus. Sed id tempor mauris. Suspendisse eget ipsum nibh. Nam ornare sodales mi quis ornare. Ut at accumsan felis. Nulla facilisi.',
    additionalParagraph: () => [
      { id: 1, text: 'Quisque a justo efficitur, sagittis felis at, maximus lacus. Sed id tempor mauris. Suspe disse eget ipsum nibh. Nam ornare sodales mi quis ornare. Ut at accumsan felis. Nullade facilisi retro.' },
      { id: 2, text: 'Suspendisse eu orci elit. In id commodo mauris. Fusce nec imperdiet nibh. Integer a erat sceleri sque, pellentesque leo a, posuere justo. Etiam maximus, nibh a luctus sagittis, nibh elit tempus est, non dapibus nunc.' },
      { id: 3, text: 'Sed arcu purus, hendrerit sed rutrum vel, faucibus sed lectus. Cras consectetur dolor et risus commodo tempus. Nullam porta eros eros, sit amet consectetur justo varius vel. Aenean gravida rutrum tellus, non lacerat.' },
    ],
    footerText: () => 'Lacus augue efficitur mi, vitae iaculis lorem turpis in enim. Donec tristique dignissim massa, id dignissim tellus sodales nec. Ut molesti neque eu arcu ultrices rhoncus. Suspendisse potenti.Quisque a justo efficitur, sagittis felis at, maximus lacus. Sed id tempor mauris. Suspendisse eget ipsum nibh. Nam ornare sodales mi quis ornare.',
  },
  Mutation: {
    submitForm: ({ firstName, lastName, message }) => ({
      firstName,
      lastName,
      message,
    }),
  },
};
