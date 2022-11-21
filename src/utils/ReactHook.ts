import { Ref, ref, watchEffect, watch } from "vue";

export function useState<T>(defaultValue: T) {
  const state = ref<T>(defaultValue);
  const setState = (value: T) => (state.value = value as any);
  return [state, setState] as [typeof state, typeof setState];
}

export function useEffect(callbackFunction: () => void, dep: Ref[]) {
  return dep.length <= 0
    ? watchEffect(() => {
        callbackFunction();
      })
    : watch(
        dep,
        (cur, pre) => {
          if (cur !== pre) {
            callbackFunction();
          }
        },
        {
          immediate: true,
          deep: true,
        }
      );
}
