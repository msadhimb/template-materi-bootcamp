import React from "react";
import Button from "./Button";

const Table = ({ data, handleDelete, elementTopTable }) => {
  return (
    <div className="relative overflow-x-auto  w-[50rem] max-h-[20rem] overflow-y-auto">
      <div className="flex justify-end w-full py-3">{elementTopTable}</div>
      <table className="w-full text-sm text-left text-gray-300 h-[1rem] shadow-md sm:rounded-lg">
        <thead className="text-xs uppercase bg-green-600 text-white">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              No
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              NIM
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Nama
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Jurusan
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr className="border-b bg-gray-800 border-b-gray-800">
                <td className="px-6 py-4 text-center">{index + 1}</td>
                <td className="px-6 py-4 text-center">{item.nim}</td>
                <td className="px-6 py-4 text-center">{item.name}</td>
                <td className="px-6 py-4 text-center">{item.jurusan}</td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <Button
                      text="Edit"
                      className={`bg-yellow-500 hover:bg-yellow-600 mx-1`}
                      to={`/edit-data/${item.id}`}
                    />
                    <Button
                      text="Delete"
                      className={`bg-red-400 hover:bg-red-500 mx-1`}
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
