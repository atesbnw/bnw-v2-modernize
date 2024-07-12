import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox-next';
import { PaletteTree } from './palette';
import Dashboard from '../app/(default)/page';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Dashboard">
        <Dashboard />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;