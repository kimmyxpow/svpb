import PocketBase from 'pocketbase';
import type { TypedPocketBase } from './generated-types';
import { browser } from '$app/environment';
import { base } from '$app/paths';

export const client = new PocketBase(
	browser ? window.location.origin + base : undefined
) as TypedPocketBase;
