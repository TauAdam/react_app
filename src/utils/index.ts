export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'text-green-700';
    case 'dead':
      return 'text-red-700';
    default:
      return 'text-gray-700';
  }
};
