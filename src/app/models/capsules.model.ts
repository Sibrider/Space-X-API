class Mission{
	name?: string;
	flight?: number;
}

export class Capsule {
	capsule_serial?: string;
	capsule_id?: string;
	status?: string;
	original_launch?: string;
	missions?: Mission[];
	landings?: number;
	type?: string;	
	details?: string | null;
	reuse_count?: number;
}