import { useDefaultProps, useStore } from '@builder.io/mitosis';

useDefaultProps({ foo: 'abc', bar: 'foo' });

type Props = {
  foo?: string;
  bar?: string;
};

export default function DefaultProps(props: Props) {
  const state = useStore({
    getProps: () => {
      return JSON.stringify({ foo: props.foo, bar: props.bar });
    },
  });

  return <div data-testid="default-props">{state.getProps()}</div>;
}
