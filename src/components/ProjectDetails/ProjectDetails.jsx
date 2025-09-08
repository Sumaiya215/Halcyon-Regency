const ProjectDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 mt-22 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Project Timeline & Financial Summary
      </h2>

      {/* Flex container for tables */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Timeline Table */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Project Timeline</h3>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Phase</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Design & Planning</td>
                  <td className="border border-gray-300 px-4 py-2">4–6 months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Construction</td>
                  <td className="border border-gray-300 px-4 py-2">48–50 months</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Interior & Soft Opening</td>
                  <td className="border border-gray-300 px-4 py-2">6–8 months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Total Duration</td>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">58–64 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Summary Table */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">Financial Summary</h3>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm md:text-base">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Project Cost</td>
                  <td className="border border-gray-300 px-4 py-2">৳450–৳550 crore</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Annual Potential Revenue</td>
                  <td className="border border-gray-300 px-4 py-2">৳211–৳214 crore</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Annual Net Profit</td>
                  <td className="border border-gray-300 px-4 py-2">৳90–105 crore</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">EBITDA Margin</td>
                  <td className="border border-gray-300 px-4 py-2">38%–42%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Annual ROI</td>
                  <td className="border border-gray-300 px-4 py-2">~18%–22%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Payback Period</td>
                  <td className="border border-gray-300 px-4 py-2">5–6 years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Expected IRR</td>
                  <td className="border border-gray-300 px-4 py-2">20%–24% (7 years)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Note */}
      <p className="text-gray-600 text-xs mt-4">
        <strong>Note:</strong> The above information is based on estimates derived from regional market analysis.
      </p>
    </div>
  );
};

export default ProjectDetails;
