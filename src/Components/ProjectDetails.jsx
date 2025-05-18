import { useParams } from 'react-router-dom';
import Blog from './Blog';
import Ecommerce from './Ecommerce';
import ChatMain from './ChatMain';

function ProjectDetails() {
  const { id } = useParams();

  if (id === "1") return <Ecommerce />;
  if (id === "2") return <Blog />;
  if (id === "3") return <ChatMain />;

  return (
    <div className="text-center text-red-500 mt-20 text-2xl">
      Project not found.
    </div>
  );
}

export default ProjectDetails;