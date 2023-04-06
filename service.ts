export type TodoElement = {
  id: string;
  image: string;
  text: string;
};

export async function getTodoElements() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        Array(5).map((_, i) => ({
          id: `todo-${i}`,
          image: `https://picsum.photos/id/${i + 1}/200`,
          text: `Todo ${i + 1}`,
        }))
      );
    }, Math.random() * 1500 + 500);
  });
}
