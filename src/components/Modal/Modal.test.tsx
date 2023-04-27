import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
  it('Modal renders', () => {
    const modal = render(
      <Modal isOpen={true} setIsOpen={() => {}}>
        <h1>RENDERS</h1>
      </Modal>
    );
    expect(modal).toBeTruthy();
  });
});
