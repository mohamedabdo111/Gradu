import React from "react";
import TrTable from "./trTable";

const Tableitems = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-md overflow-hidden">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Phone
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Flat Name
            </th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <TrTable></TrTable>
          <TrTable></TrTable>
          <TrTable></TrTable>
          <TrTable></TrTable>
          <TrTable></TrTable>
        </tbody>
      </table>
    </div>
  );
};

export default Tableitems;
