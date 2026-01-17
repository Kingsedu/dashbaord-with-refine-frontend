// import { createSimpleRestDataProvider } from "@refinedev/rest/simple-rest";
// import { API_URL } from "./constants";
import {
  DataProvider,
  GetListParams,
  GetListResponse,
  BaseRecord,
} from "@refinedev/core";
import { Subject } from "@/types";
// export const { kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });

const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Learn the fundamentals of computer science and programming",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    code: "CS201",
    name: "Data Structures and Algorithms",
    department: "CS",
    description:
      "Explore essential data structures and algorithm design patterns",
    createdAt: "2024-01-16T11:30:00Z",
  },
  {
    id: 3,
    code: "CS301",
    name: "Web Development",
    department: "CS",
    description: "Build modern web applications using current frameworks",
    createdAt: "2024-01-17T09:15:00Z",
  },
  {
    id: 4,
    code: "MATH101",
    name: "Calculus I",
    department: "Math",
    description: "Introduction to limits, derivatives, and integrals",
    createdAt: "2024-01-18T13:45:00Z",
  },
  {
    id: 5,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description: "Study matrices, vectors, and linear transformations",
    createdAt: "2024-01-19T14:20:00Z",
  },
  {
    id: 6,
    code: "ENG101",
    name: "English Composition",
    department: "English",
    description: "Master the fundamentals of academic writing",
    createdAt: "2024-01-20T10:30:00Z",
  },
  {
    id: 7,
    code: "ENG201",
    name: "Literature Analysis",
    department: "English",
    description: "Analyze and interpret classic and contemporary literature",
    createdAt: "2024-01-21T11:00:00Z",
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error("This function is not present in mock");
  },
  create: async () => {
    throw new Error("This function is not present in mock");
  },
  update: async () => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock");
  },
  getApiUrl: () => "",
};
