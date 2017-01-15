/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EmptyStateComponent } from './empty-state.component';

describe('Component: EmptyState', () => {
  it('should create an instance', () => {
    let component = new EmptyStateComponent();
    expect(component).toBeTruthy();
  });
});
